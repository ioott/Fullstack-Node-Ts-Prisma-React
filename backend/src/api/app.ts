import { NextFunction, Request, Response } from 'express';
import * as express from 'express'
import cors from 'cors'
import helmet from 'helmet';
import { errorHandler } from '../middlewares/errorHandler';
import { errors } from 'celebrate';
import buffetRouter from '../servicesManagement/routes/buffetRouter';
import durationRouter from '../servicesManagement/routes/durationRouter';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(errors()); // Erros do celebrate

app.use('/buffet', buffetRouter);
app.use('/duration', durationRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});
q
console.log('Iniciando o servidor...');

export default app;
