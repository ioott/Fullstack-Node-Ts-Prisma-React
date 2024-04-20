import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { createDurationSchema, updateDurationSchema } from '../middlewares/durationValidation'
import * as model from '../models/durationModel'
import { AddDurationParams } from '../interfaces/IDuration';

export async function createDuration(data: AddDurationParams):
Promise<Record<string, number>> {
  let serviceResponse;

  const isValid = createDurationSchema.validate(data)

  isValid.error
  ? serviceResponse = {
    statusCode: StatusCodes.BAD_REQUEST,
    data: isValid.error.details.map(
      (detail: any) => detail.message
    ),
  }

  : await model.createDuration(data)
    ? serviceResponse = {
      statusCode: StatusCodes.CREATED,
      data: 'Duration cadastrado com sucesso'
    }
    : serviceResponse = {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      data: ReasonPhrases.INTERNAL_SERVER_ERROR
    }

  return serviceResponse
}

export async function updateDuration (
  id: bigint,
  data: Partial<AddDurationParams>
): Promise<Record<string, number>> {
  let serviceResponse

  const isValid = updateDurationSchema.validate(data)

  isValid.error
  ? serviceResponse = {
    statusCode: StatusCodes.BAD_REQUEST,
    data: isValid.error.details.map(
      (detail: any) => detail.message
    ),
  }

  : await model.updateDuration(id, data)
    ? serviceResponse = {
      statusCode: StatusCodes.OK,
      data: 'Duration atualizado com sucesso'
    }
    : serviceResponse = {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      data: ReasonPhrases.INTERNAL_SERVER_ERROR
    }

  return serviceResponse
}

export async function findDurationById (id: bigint):
Promise<Record<string, number>> {
  let serviceResponse
  let durationFound

  durationFound = await model.findDurationById(id)

  if(durationFound) {
    serviceResponse = {
    statusCode: StatusCodes.OK,
    data: durationFound
    }
  } else {
    serviceResponse = {
      statusCode: StatusCodes.NOT_FOUND,
      data: ReasonPhrases.NOT_FOUND
    }
  }

  return serviceResponse
}

export async function allDurations ():
Promise<Record<string, number>> {
  let serviceResponse
  let allDurations

  allDurations = await model.allDurations()

  if(allDurations) {
    serviceResponse = {
    statusCode: StatusCodes.OK,
    data: allDurations
    }
  } else {
    serviceResponse = {
      statusCode: StatusCodes.NOT_FOUND,
      data: ReasonPhrases.NOT_FOUND
    }
  }
  return serviceResponse
}
