import { Request, Response } from 'express'
import * as service from '../services/guestsQttService'

export async function createGuestsQtt (req: Request, res: Response):
Promise<Record<string, any>> {
  const { statusCode, data } = await service
  .createGuestsQtt(req.body);

  return res.status(statusCode).json(data);
}

export async function updateGuestsQtt (req: Request, res: Response):
Promise<Record<string, any>> {
  const { statusCode, data } = await service
  .updateGuestsQtt(BigInt(req.params.id), req.body)

  return res.status(statusCode).json(data)
}

export async function findGuestsQttById (req: Request, res: Response):
Promise<Record<string, any>> {
  const { statusCode, data } = await service
  .findGuestsQttById(BigInt(req.params.id))

  return res.status(statusCode).json(data)
}

export async function allGuestsQtt (_req: Request, res: Response): Promise<Record<string, any>> {
  const { statusCode, data } = await service.allGuestsQtts()

  return res.status(statusCode).json(data)
}