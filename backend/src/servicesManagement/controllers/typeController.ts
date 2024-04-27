import { Request, Response } from 'express'
import * as service from '../services/typeService'

export async function createType (req: Request, res: Response)
: Promise<Record<string, any>> {

  const { statusCode, data } = await service
  .createType(req.body);

  return res.status(statusCode).json(data);
}

export async function updateType (req: Request, res: Response)
: Promise<Record<string, any>> {

  const { statusCode, data } = await service
  .updateType(BigInt(req.params.id), req.body)

  return res.status(statusCode).json(data)
}

export async function findTypeById (req: Request, res: Response)
: Promise<Record<string, any>> {

  const { statusCode, data } = await service
  .findTypeById(BigInt(req.params.id))

  return res.status(statusCode).json(data)
}

export async function allTypes (_req: Request, res: Response)
: Promise<Record<string, any>> {

  const { statusCode, data } = await service.allTypes()

  return res.status(statusCode).json(data)
}