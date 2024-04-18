import { PrismaClient } from '@prisma/client'
import { BuffetResponse, AddBuffetParams } from './interfaces/Ibuffet'

const prisma = new PrismaClient()

export async function createBuffet(data: AddBuffetParams):
Promise<string> {
  await prisma.buffet.create({
    data: {
      id: new Date().getTime(),
      name: data.name,
      description: data.description,
      events:
        data.events
        ? { connect: data.events.map(id => ({ id }))}
        : undefined,
      durations: {
        create: data.durations.map(id => ({
          duration: {connect: { id }}
        }))
      },
      guestsQtts: {
        create: data.guestsQtts.map(id => ({
          guestsQtt: {connect: { id }}
        }))
      },
    }
  })
  return "success"
};


export async function updateBuffet(
  id: number,
  data: Partial<AddBuffetParams>):
Promise<string> {
  const durations = data.durations
  if (durations) {
    const existingDurations = await prisma.durationsOnBuffets
    .findMany({
      where: { buffetId: id },
      select: { durationId: true },
    });

    const durationsToRemove = existingDurations.filter(duration =>
      !durations.includes(duration.durationId));

      await prisma.durationsOnBuffets.deleteMany({
      where: {
        buffetId: id,
        durationId: {
          in: durationsToRemove.map(duration => duration.durationId),
        },
      },
    });
  }

  const guestsQtts = data.guestsQtts
  if (guestsQtts) {
    const existingGuestsQtts = await prisma.guestsQttsOnBuffets
    .findMany({
      where: { buffetId: id },
      select: { guestsQttId: true },
    });

    const guestsQttsToRemove = existingGuestsQtts.filter(guestsQtt =>
      !guestsQtts.includes(guestsQtt.guestsQttId));

    await prisma.guestsQttsOnBuffets.deleteMany({
      where: {
        buffetId: id,
        guestsQttId: {
          in: guestsQttsToRemove.map(guestsQtt => guestsQtt.guestsQttId),
        },
      },
    });
  }

  await prisma.buffet.update({
    where: { id },
    data: {
      name: data.name,
      description: data.description,
      events:
        data.events
        ? { connect: data.events.map(id => ({ id }))}
        : undefined,
      durations:
        data.durations
        ? {
          create: data.durations.map(id => ({
            duration: {connect: { id }
          }}))
        }
        : undefined,
      guestsQtts:
        data.guestsQtts
        ? {
          create: data.guestsQtts.map(id => ({
            guestsQtt: {connect: { id }}
          }))
        }
        : undefined
    }
  })

  return "success";
}

export async function findBuffetById (id: number): Promise<BuffetResponse | null> {
  return await prisma.buffet.findUnique({
    where: { id },
    select: {
      name: true,
      description: true,
      events: {
        select: {
          date: true,
          client: {
            select: { name: true }
          }
        }
      },
      durations: {
        select: {
          duration: {
            select: { duration: true }
          }
        }
      },
      guestsQtts: {
        select: {
          guestsQtt: {
            select: {
              guestsQtt: true,
              price: true
            }
          }
        }
      }
    }
  });
}

export async function allBuffets(): Promise<BuffetResponse[]> {
  const allBuffets = await prisma.buffet.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      events: {
        select: {
          date: true,
          client: {
            select: { name: true }
          }
        }
      },
      durations: {
        select: {
          duration: {
            select: { duration: true }
          }
        }
      },
      guestsQtts: {
        select: {
          guestsQtt: {
            select: {
              guestsQtt: true,
              price: true
            }
          }
        }
      }
    }
  });

  // JSON.stringify() não consegue serializar valores do tipo BigInt (tipo do id), portanto precisa ser convertido antes.
  return allBuffets.map(buffet => ({
    ...buffet,
    id: buffet.id.toString()
  }));

}