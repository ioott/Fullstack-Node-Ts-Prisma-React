import { NextFunction, Request, Response } from 'express';
import cors = require('cors')
import express = require('express')
import helmet from 'helmet';
import { errorHandler } from '../middlewares/errorHandler';
import serviceManagementRouter from '../serviceManagement/serviceManagementRouter';
import { errors } from 'celebrate';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(errors()); // Erros do celebrate

app.use('/', serviceManagementRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});

console.log('Iniciando o servidor...');

export default app;
