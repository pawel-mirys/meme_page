import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
  res.send('Api is running!');
});

app.use('/api/users', userRoutes);
app.use('/api/post', postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
