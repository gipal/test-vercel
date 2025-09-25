
import { Router } from 'express';
import auth from '../middleware/auth.js';
import User from '../models/User.js';
const router = Router();
router.get('/profile', auth, async (req,res)=>{
  const me = await User.findById(req.user.id).select('email name role createdAt');
  res.json({ user: me });
});
export default router;
