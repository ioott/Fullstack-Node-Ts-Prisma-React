import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { createOptionalSchema, updateOptionalSchema } from '../middlewares/optionalValidation'
import * as model from '../models/optionalModel'
import { AddOptionalParams } from '../interfaces/IOptional';

export async function createOptional(data: AddOptionalParams):
Promise<Record<string, number>> {
  let serviceResponse;

  const isValid = createOptionalSchema.validate(data)

  isValid.error
  ? serviceResponse = {
    statusCode: StatusCodes.BAD_REQUEST,
    data: isValid.error.details.map(
      (detail: any) => detail.message
    ),
  }

  : await model.createOptional(data)
    ? serviceResponse = {
      statusCode: StatusCodes.CREATED,
      data: 'Optional cadastrado com sucesso'
    }
    : serviceResponse = {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      data: ReasonPhrases.INTERNAL_SERVER_ERROR
    }

  return serviceResponse
}

export async function updateOptional (
  id: bigint,
  data: Partial<AddOptionalParams>
): Promise<Record<string, number>> {
  let serviceResponse

  const isValid = updateOptionalSchema.validate(data)

  isValid.error
  ? serviceResponse = {
    statusCode: StatusCodes.BAD_REQUEST,
    data: isValid.error.details.map(
      (detail: any) => detail.message
    ),
  }

  : await model.updateOptional(id, data)
    ? serviceResponse = {
      statusCode: StatusCodes.OK,
      data: 'Optional atualizado com sucesso'
    }
    : serviceResponse = {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      data: ReasonPhrases.INTERNAL_SERVER_ERROR
    }

  return serviceResponse
}

export async function findOptionalById (id: bigint):
Promise<Record<string, number>> {
  let serviceResponse
  let optionalFound

  optionalFound = await model.findOptionalById(id)

  if(optionalFound) {
    serviceResponse = {
    statusCode: StatusCodes.OK,
    data: optionalFound
    }
  } else {
    serviceResponse = {
      statusCode: StatusCodes.NOT_FOUND,
      data: ReasonPhrases.NOT_FOUND
    }
  }

  return serviceResponse
}

export async function allOptionals ():
Promise<Record<string, number>> {
  let serviceResponse
  let allOptionals

  allOptionals = await model.allOptionals()

  if(allOptionals) {
    serviceResponse = {
    statusCode: StatusCodes.OK,
    data: allOptionals
    }
  } else {
    serviceResponse = {
      statusCode: StatusCodes.NOT_FOUND,
      data: ReasonPhrases.NOT_FOUND
    }
  }
  return serviceResponse
}
