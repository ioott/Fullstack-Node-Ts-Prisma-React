import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { createTypeSchema, updateTypeSchema } from '../middlewares/typeValidation'
import * as model from '../models/typeModel'
import { AddTypeParams } from '../interfaces/IType';

export async function createType(data: AddTypeParams)
: Promise<Record<string, number>> {

  let serviceResponse;
  const isValid = createTypeSchema.validate(data)

  isValid.error
  ? serviceResponse = {
    statusCode: StatusCodes.BAD_REQUEST,
    data: isValid.error.details.map(
      (detail: any) => detail.message
    ),
  }
  : await model.createType(data)
    ? serviceResponse = {
      statusCode: StatusCodes.CREATED,
      data: 'Type cadastrado com sucesso'
    }
    : serviceResponse = {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      data: ReasonPhrases.INTERNAL_SERVER_ERROR
    }

  return serviceResponse
}

export async function updateType (
  id: bigint,
  data: Partial<AddTypeParams>)
: Promise<Record<string, number>> {

  let serviceResponse
  const isValid = updateTypeSchema.validate(data)

  isValid.error
  ? serviceResponse = {
    statusCode: StatusCodes.BAD_REQUEST,
    data: isValid.error.details.map(
      (detail: any) => detail.message
    ),
  }
  : await model.updateType(id, data)
    ? serviceResponse = {
      statusCode: StatusCodes.OK,
      data: 'Type atualizado com sucesso'
    }
    : serviceResponse = {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      data: ReasonPhrases.INTERNAL_SERVER_ERROR
    }

  return serviceResponse
}

export async function findTypeById (id: bigint)
: Promise<Record<string, number>> {

  let serviceResponse
  let typeFound

  typeFound = await model.findTypeById(id)

  if(typeFound) {
    serviceResponse = {
    statusCode: StatusCodes.OK,
    data: typeFound
    }
  } else {
    serviceResponse = {
      statusCode: StatusCodes.NOT_FOUND,
      data: ReasonPhrases.NOT_FOUND
    }
  }

  return serviceResponse
}

export async function allTypes()
: Promise<Record<string, number>> {

  let serviceResponse
  let allTypes

  allTypes = await model.allTypes()

  if(allTypes) {
    serviceResponse = {
    statusCode: StatusCodes.OK,
    data: allTypes
    }
  } else {
    serviceResponse = {
      statusCode: StatusCodes.NOT_FOUND,
      data: ReasonPhrases.NOT_FOUND
    }
  }
  return serviceResponse
}
