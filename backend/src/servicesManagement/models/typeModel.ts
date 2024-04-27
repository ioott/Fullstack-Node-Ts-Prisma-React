import { PrismaClient } from '@prisma/client'
import { AddTypeParams, TypeResponse } from '../interfaces/IType'

const prisma = new PrismaClient()

export async function createType(data: AddTypeParams)
: Promise<string> {

  await prisma.type.create({
    data: {
      id: new Date().getTime(),
      type: data.type,
      price: data.price,
      active: data.active
        ? data.active
        : undefined,
      optional: data.optionals
        ? {create: data.optionals.map(id => ({
            optional: { connect: { id } },
          }))}
        : undefined,
    }
  })

  return "success"
}

export async function updateType(
  typeId: bigint,
  data: Partial<AddTypeParams>)
: Promise<string> {

  const { optionals } = data
  if (optionals) {

    const existingOptionals = await prisma.typesOnOptionals
    .findMany({
      where: { typeId },
      select: { optionalId: true },
    })

    const optionalsToRemove = existingOptionals.filter(type =>
      !optionals.includes(type.optionalId));

      await prisma.typesOnOptionals.deleteMany({
      where: {
        typeId,
        optionalId: {
          in: optionalsToRemove.map(type => type.optionalId),
        },
      },
    })

  }

  await prisma.type.update({
    where: { id: typeId },
    data: {
      type: data.type,
      price: data.price,
      active: data.active,
      optional: data.optionals
        ? { create: data.optionals.map(id => ({
            optional: { connect: { id } },
          }))}
        : undefined,
    }
  })

  return "success"
}

export async function findTypeById (id: bigint)
: Promise<TypeResponse | null> {

  return await prisma.type.findUnique({
    where: { id },
    select: {
      type: true,
      price: true,
      active: true,
      optional: { select: {
        optional: { select: { name: true }}
      }},
    }
  })

}

export async function allTypes()
: Promise<TypeResponse[]> {

  const allTypes = await prisma.type.findMany({
    select: {
      id: true,
      type: true,
      price: true,
      active: true,
      optional: { select: {
        optional: { select: { name: true }}
      }},
    }
  })

  // JSON.stringify() não consegue serializar valores do tipo BigInt (tipo do id), portanto precisa ser convertido antes.

  return allTypes.map(type => ({
    ...type,
    id: type.id.toString()
  }))

}