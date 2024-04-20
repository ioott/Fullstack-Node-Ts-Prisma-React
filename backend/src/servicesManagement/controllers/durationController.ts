import { Request, Response } from 'express'
import * as service from '../services/durationService'

export async function createDuration (req: Request, res: Response):
Promise<Record<string, any>> {
  const { statusCode, data } = await service
  .createDuration(req.body);

  return res.status(statusCode).json(data);
}

export async function updateDuration (req: Request, res: Response):
Promise<Record<string, any>> {
  const { statusCode, data } = await service
  .updateDuration(BigInt(req.params.id), req.body)

  return res.status(statusCode).json(data)
}

export async function findDurationById (req: Request, res: Response):
Promise<Record<string, any>> {
  const { statusCode, data } = await service
  .findDurationById(BigInt(req.params.id))

  return res.status(statusCode).json(data)
}

export async function allDurations (_req: Request, res: Response): Promise<Record<string, any>> {
  const { statusCode, data } = await service.allDurations()

  return res.status(statusCode).json(data)
}