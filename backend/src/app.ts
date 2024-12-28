import express, {Request, Response} from'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import api from './api';
import {notFound,errorHandler} from './middlewares';
import dotenv from 'dotenv';
import { setUserFromTokenIfValid } from './api/auth/auth.middlewares';
import { PrismaClient } from '@prisma/client';

const app = express();
//const prisma = new PrismaClient();

dotenv.config();

app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(setUserFromTokenIfValid); 

app.get('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'Top level home'
  })
});

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler)

export default app;
