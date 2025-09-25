
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/', (_, res) => res.json({ ok: true, service: 'API' }));
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 4001;
mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log('Mongo connected');
  app.listen(PORT, ()=>console.log('API http://0.0.0.0:'+PORT));
}).catch(e=>{ console.error(e); process.exit(1); });
