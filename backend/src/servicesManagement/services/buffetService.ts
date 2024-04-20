import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { AddBuffetParams } from '../interfaces/IBuffet'
import { createBuffetSchema, updateBuffetSchema } from '../middlewares/buffetValidation'
import * as model from '../models/buffetModel'

export async function createBuffet(data: AddBuffetParams):
Promise<Record<string, number>> {
  let serviceResponse;

  const isValid = createBuffetSchema.validate(data)

  isValid.error
  ? serviceResponse = {
    statusCode: StatusCodes.BAD_REQUEST,
    data: isValid.error.details.map(
      (detail: any) => detail.message
    ),
  }

  : await model.createBuffet(data)
    ? serviceResponse = {
      statusCode: StatusCodes.CREATED,
      data: 'Buffet cadastrado com sucesso'
    }
    : serviceResponse = {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      data: ReasonPhrases.INTERNAL_SERVER_ERROR
    }

  return serviceResponse
}

export async function updateBuffet (
  id: bigint,
  data: Partial<AddBuffetParams>
): Promise<Record<string, number>> {
  let serviceResponse

  const isValid = updateBuffetSchema.validate(data)

  isValid.error
  ? serviceResponse = {
    statusCode: StatusCodes.BAD_REQUEST,
    data: isValid.error.details.map(
      (detail: any) => detail.message
    ),
  }

  : await model.updateBuffet(id, data)
    ? serviceResponse = {
      statusCode: StatusCodes.OK,
      data: 'Buffet atualizado com sucesso'
    }
    : serviceResponse = {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      data: ReasonPhrases.INTERNAL_SERVER_ERROR
    }

  return serviceResponse
}

export async function findBuffetById (id: bigint):
Promise<Record<string, number>> {
  let serviceResponse
  let buffetFound

  buffetFound = await model.findBuffetById(id)

  if(buffetFound) {
    serviceResponse = {
    statusCode: StatusCodes.OK,
    data: buffetFound
    }
  } else {
    serviceResponse = {
      statusCode: StatusCodes.NOT_FOUND,
      data: ReasonPhrases.NOT_FOUND
    }
  }

  return serviceResponse
}

export async function allBuffets ():
Promise<Record<string, number>> {
  let serviceResponse
  let allBuffets

  allBuffets = await model.allBuffets()

  if(allBuffets) {
    serviceResponse = {
    statusCode: StatusCodes.OK,
    data: allBuffets
    }
  } else {
    serviceResponse = {
      statusCode: StatusCodes.NOT_FOUND,
      data: ReasonPhrases.NOT_FOUND
    }
  }
  return serviceResponse
}