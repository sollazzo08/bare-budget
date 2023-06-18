import express, {Request, Response} from'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import Knex from 'knex';
import {Model} from 'objection';
import api from './api';
import {notFound,errorHandler} from './middlewares';
import dotenv from 'dotenv';
import { setUserFromTokenIfValid } from './api/auth/auth.middlewares';

const app = express();

dotenv.config();

const knex = Knex({
  client: 'pg',
  connection: {
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
  migrations: {
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds'
  }
});

Model.knex(knex)


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
