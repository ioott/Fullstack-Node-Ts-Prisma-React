import { NextFunction, Request, Response } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

const errorMessages = {
  400: 'Bad Request: A requisição contém sintaxe inválida ou não pode ser processada.',
  401: 'Unauthorized: É necessária autenticação para acessar este recurso.',
  403: 'Forbidden: O servidor entende a requisição, mas recusa-se a autorizá-la.',
  404: 'Not Found: O recurso requisitado não foi encontrado no servidor.',
  405: 'Method Not Allowed: O método especificado na requisição não é permitido para o recurso.',
  500: 'Internal Server Error: O servidor encontrou uma situação inesperada que impediu o processamento da requisição.',
};

const defaultMessage = (statusCode: number) => getReasonPhrase(statusCode);

export const getMessageForStatusCode = (statusCode: number): string => {
  return errorMessages[statusCode] || defaultMessage(statusCode);
};

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack);

  const statusCode = res.statusCode === StatusCodes.OK ? StatusCodes.INTERNAL_SERVER_ERROR : res.statusCode;
  const message = getMessageForStatusCode(statusCode);

  res.status(statusCode).json({
    message: message,
    error: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message,
  });
};
