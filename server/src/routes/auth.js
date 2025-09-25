
import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const router = Router();
router.post('/register', async (req,res)=>{
  const {email,password,name=''}=req.body;
  if(!email||!password) return res.status(400).json({error:'email & password required'});
  const exists = await User.findOne({email});
  if(exists) return res.status(409).json({error:'Email already registered'});
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({email,passwordHash,name});
  res.status(201).json({id:user._id,email:user.email,name:user.name});
});
router.post('/login', async (req,res)=>{
  const {email,password}=req.body;
  const user = await User.findOne({email});
  if(!user) return res.status(401).json({error:'Invalid credentials'});
  const ok = await bcrypt.compare(password, user.passwordHash);
  if(!ok) return res.status(401).json({error:'Invalid credentials'});
  const token = jwt.sign({sub:user._id,email:user.email,role:user.role}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRES_IN||'2h'});
  res.json({token,user:{id:user._id,email:user.email,name:user.name,role:user.role}});
});
export default router;
