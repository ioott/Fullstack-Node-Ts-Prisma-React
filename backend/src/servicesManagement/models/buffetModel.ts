import { PrismaClient } from '@prisma/client'
import { BuffetResponse, AddBuffetParams } from '../interfaces/IBuffet'

const prisma = new PrismaClient()

export async function createBuffet(data: AddBuffetParams)
: Promise<string> {

  await prisma.buffet.create({
    data: {
      id: new Date().getTime(),
      name: data.name,
      description: data.description,
      active: data.active
        ? data.active
        : undefined,
      events:{ connect: data.events?.map(id => ({ id }))},
      durations:{
        create: data.durations.map(id => ({
          duration: {connect: { id }}
        }))
      },
      guestsQtts:{
        create: data.guestsQtts.map(id => ({
          guestsQtt: {connect: { id }}
        }))
      },
    }
  })

  return "success"
}

export async function updateBuffet(
  buffetId: bigint,
  data: Partial<AddBuffetParams>)
: Promise<string> {

  const { durations } = data
  if (durations) {

    const existingDurations = await prisma.durationsOnBuffets
    .findMany({
      where: { buffetId },
      select: { durationId: true },
    })

    const durationsToRemove = existingDurations.filter(duration =>
      !durations.includes(duration.durationId));

      await prisma.durationsOnBuffets.deleteMany({
      where: {
        buffetId,
        durationId: {
          in: durationsToRemove.map(duration => duration.durationId),
        },
      },

    })

  }

  const { guestsQtts } = data
  if (guestsQtts) {

    const existingGuestsQtts = await prisma.guestsQttsOnBuffets
    .findMany({
      where: { buffetId },
      select: { guestsQttId: true },
    })

    const guestsQttsToRemove = existingGuestsQtts.filter(guestsQtt =>
      !guestsQtts.includes(guestsQtt.guestsQttId));

    await prisma.guestsQttsOnBuffets.deleteMany({
      where: {
        buffetId,
        guestsQttId: {
          in: guestsQttsToRemove.map(guestsQtt => guestsQtt.guestsQttId),
        },
      },
    })

  }

  await prisma.buffet.update({
    where: { id: buffetId },
    data: {
      name: data.name,
      description: data.description,
      active: data.active,
      events: data.events
        ? {connect: data.events.map(id => ({ id: buffetId }))}
        : undefined,
      durations: data.durations
        ? {create: data.durations.map(id => ({
            duration: {connect: { id }}
          }))}
        : undefined,
      guestsQtts: data.guestsQtts
        ? {create: data.guestsQtts.map(id => ({
            guestsQtt: {connect: { id }}
          }))}
        : undefined
    }
  })

  return "success"
}

export async function findBuffetById (id: bigint)
: Promise<BuffetResponse | null> {

  return await prisma.buffet.findUnique({
    where: { id },
    select: {
      name: true,
      description: true,
      active: true,
      events: {select: {
        date: true,
        client: {select: { name: true }}
      }},
      durations: {select: {
        duration: {select: { duration: true }}
      }},
      guestsQtts: {
        select: {guestsQtt: {select: {
          guestsQtt: true,
          price: true
        }}}
      }
    }
  })

}

export async function allBuffets()
: Promise<BuffetResponse[]> {

  const allBuffets = await prisma.buffet.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      active: true,
      events: {select: {
        date: true,
        client: {select: { name: true }}
      }},
      durations: {
        select: {duration: {
          select: { duration: true }
        }}
      },
      guestsQtts: {
        select: {guestsQtt: {select: {
          guestsQtt: true,
          price: true
        }}}
      }
    }

  })

  // JSON.stringify() não consegue serializar valores do tipo BigInt (tipo do id), portanto precisa ser convertido antes.

  return allBuffets.map(buffet => ({
    ...buffet,
    id: buffet.id.toString()
  }))

}