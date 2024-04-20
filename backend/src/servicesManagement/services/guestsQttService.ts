import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { createGuestsQttSchema, updateGuestsQttSchema } from '../middlewares/questsQttValidation'
import * as model from '../models/guestsQttModel'
import { AddGuestsQttParams } from '../interfaces/IGuestsQtt';

export async function createGuestsQtt(data: AddGuestsQttParams):
Promise<Record<string, number>> {
  let serviceResponse;

  const isValid = createGuestsQttSchema.validate(data)

  isValid.error
  ? serviceResponse = {
    statusCode: StatusCodes.BAD_REQUEST,
    data: isValid.error.details.map(
      (detail: any) => detail.message
    ),
  }

  : await model.createGuestsQtt(data)
    ? serviceResponse = {
      statusCode: StatusCodes.CREATED,
      data: 'GuestsQtt cadastrado com sucesso'
    }
    : serviceResponse = {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      data: ReasonPhrases.INTERNAL_SERVER_ERROR
    }

  return serviceResponse
}

export async function updateGuestsQtt (
  id: bigint,
  data: Partial<AddGuestsQttParams>
): Promise<Record<string, number>> {
  let serviceResponse

  const isValid = updateGuestsQttSchema.validate(data)

  isValid.error
  ? serviceResponse = {
    statusCode: StatusCodes.BAD_REQUEST,
    data: isValid.error.details.map(
      (detail: any) => detail.message
    ),
  }

  : await model.updateGuestsQtt(id, data)
    ? serviceResponse = {
      statusCode: StatusCodes.OK,
      data: 'GuestsQtt atualizado com sucesso'
    }
    : serviceResponse = {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      data: ReasonPhrases.INTERNAL_SERVER_ERROR
    }

  return serviceResponse
}

export async function findGuestsQttById (id: bigint):
Promise<Record<string, number>> {
  let serviceResponse
  let guestsQttFound

  guestsQttFound = await model.findGuestsQttById(id)

  if(guestsQttFound) {
    serviceResponse = {
    statusCode: StatusCodes.OK,
    data: guestsQttFound
    }
  } else {
    serviceResponse = {
      statusCode: StatusCodes.NOT_FOUND,
      data: ReasonPhrases.NOT_FOUND
    }
  }

  return serviceResponse
}

export async function allGuestsQtts ():
Promise<Record<string, number>> {
  let serviceResponse
  let allGuestsQtts

  allGuestsQtts = await model.allGuestsQtts()

  if(allGuestsQtts) {
    serviceResponse = {
    statusCode: StatusCodes.OK,
    data: allGuestsQtts
    }
  } else {
    serviceResponse = {
      statusCode: StatusCodes.NOT_FOUND,
      data: ReasonPhrases.NOT_FOUND
    }
  }
  return serviceResponse
}
