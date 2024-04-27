import { PrismaClient } from '@prisma/client'
import { AddGuestsQttParams, GuestsQttResponse } from '../interfaces/IGuestsQtt'

const prisma = new PrismaClient()

export async function createGuestsQtt(data: AddGuestsQttParams)
: Promise<string> {

  await prisma.guestsQtt.create({
    data: {
      id: new Date().getTime(),
      guestsQtt: data.guestsQtt,
      price: data.price,
      active: data.active
        ? data.active
        : undefined,
      buffets: data.buffets
        ? {create: data.buffets.map(id => ({
            buffet: { connect: { id } },
        }))}
        : undefined,
    }
  })

  return "success"
}


export async function updateGuestsQtt(
  guestsQttId: bigint,
  data: Partial<AddGuestsQttParams>)
: Promise<string> {

  const { buffets } = data
  if (buffets) {

    const existingBuffets = await prisma.guestsQttsOnBuffets
    .findMany({
      where: { guestsQttId },
      select: { buffetId: true },
    })

    const buffetsToRemove = existingBuffets.filter(guestsQtt =>
      !buffets.includes(guestsQtt.buffetId));

      await prisma.guestsQttsOnBuffets.deleteMany({
      where: {
        guestsQttId,
        buffetId: {
          in: buffetsToRemove.map(guestsQtt => guestsQtt.buffetId),
        },
      },
    })

  }

  await prisma.guestsQtt.update({
    where: { id: guestsQttId },
    data: {
      guestsQtt:
        data.guestsQtt
        ? data.guestsQtt
        : undefined,
      price: data.price,
      active: data.active,
      buffets:
        data.buffets
        ? {create: data.buffets.map(id => ({
            buffet: { connect: { id } },
          }))}
        : undefined,
    }
  })

  return "success"
}

export async function findGuestsQttById (id: bigint)
: Promise<GuestsQttResponse | null> {

  return await prisma.guestsQtt.findUnique({
    where: { id },
    select: {
      guestsQtt: true,
      price: true,
      active: true,
      buffets: {select: {
        buffet: {select: { name: true }}
      }},
    }
  })

}

export async function allGuestsQtts()
: Promise<GuestsQttResponse[]> {

  const allGuestsQtts = await prisma.guestsQtt.findMany({
    select: {
      id: true,
      guestsQtt: true,
      price: true,
      active: true,
      buffets: {select: {
        buffet: {select: { name: true }}
      }},
    }
  })

  // JSON.stringify() não consegue serializar valores do tipo BigInt (tipo do id), portanto precisa ser convertido antes.

  return allGuestsQtts.map(guestsQtt => ({
    ...guestsQtt,
    id: guestsQtt.id.toString()
  }))

}