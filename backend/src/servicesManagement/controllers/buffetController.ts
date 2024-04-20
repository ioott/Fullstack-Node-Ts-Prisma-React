import { Request, Response } from 'express'
import * as service from '../services/buffetService'

export async function createBuffet (req: Request, res: Response):
Promise<Record<string, any>> {
  const { statusCode, data } = await service
  .createBuffet(req.body);

  return res.status(statusCode).json(data);
}

export async function updateBuffet (req: Request, res: Response):
Promise<Record<string, any>> {
  const { statusCode, data } = await service
  .updateBuffet(BigInt(req.params.id), req.body)

  return res.status(statusCode).json(data)
}

export async function findBuffetById (req: Request, res: Response):
Promise<Record<string, any>> {
  const { statusCode, data } = await service
  .findBuffetById(BigInt(req.params.id))

  return res.status(statusCode).json(data)
}

export async function allBuffets (_req: Request, res: Response): Promise<Record<string, any>> {
  const { statusCode, data } = await service.allBuffets()

  return res.status(statusCode).json(data)
}