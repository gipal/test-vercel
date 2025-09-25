/*
 * @Descripttion: your project
 * @Author: zhengzetao
 * @Date: 2025-08-18 11:26:22
 */
import jwt from 'jsonwebtoken';
export default function auth(req, res, next) {
  const h = req.headers.authorization || '';
  if (!h.startsWith('Bearer ')) return res.status(401).json({
    error: 'Missing token'
  });
  const token = h.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: payload.sub,
      email: payload.email,
      role: payload.role
    };
    next();
  } catch (e) {
    return res.status(401).json({
      error: 'Invalid or expired token'
    });
  }
}