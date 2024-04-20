import { Request, Response } from 'express'
import * as service from '../services/optionalService'

export async function createOptional (req: Request, res: Response):
Promise<Record<string, any>> {
  const { statusCode, data } = await service
  .createOptional(req.body);

  return res.status(statusCode).json(data);
}

export async function updateOptional (req: Request, res: Response):
Promise<Record<string, any>> {
  const { statusCode, data } = await service
  .updateOptional(BigInt(req.params.id), req.body)

  return res.status(statusCode).json(data)
}

export async function findOptionalById (req: Request, res: Response):
Promise<Record<string, any>> {
  const { statusCode, data } = await service
  .findOptionalById(BigInt(req.params.id))

  return res.status(statusCode).json(data)
}

export async function allOptional (_req: Request, res: Response): Promise<Record<string, any>> {
  const { statusCode, data } = await service.allOptionals()

  return res.status(statusCode).json(data)
}