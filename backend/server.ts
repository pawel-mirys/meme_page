import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server in running at PORT: ${PORT}`);
});
