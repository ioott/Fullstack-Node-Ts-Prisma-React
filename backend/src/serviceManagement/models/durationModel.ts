import { PrismaClient } from '@prisma/client'
import { AddDurationParams, DurationResponse } from '../interfaces/IDuration'

const prisma = new PrismaClient()

export async function createDuration(data: AddDurationParams):
Promise<string> {
  await prisma.duration.create({
    data: {
      id: new Date().getTime(),
      duration: data.duration,
      buffets:
        data.buffets
        ? {
          create: data.buffets.map(id => ({
            buffet: { connect: { id } },
          }))
        }
        : undefined,
    }
  })
  return "success"
};


export async function updateDuration(
  id: number,
  data: Partial<AddDurationParams>):
Promise<string> {
  const buffets = data.buffets
  if (buffets) {
    const existingBuffets = await prisma.durationsOnBuffets
    .findMany({
      where: { durationId: id },
      select: { buffetId: true },
    });

    const buffetsToRemove = existingBuffets.filter(duration =>
      !buffets.includes(duration.buffetId));

      await prisma.durationsOnBuffets.deleteMany({
      where: {
        durationId: id,
        buffetId: {
          in: buffetsToRemove.map(duration => duration.buffetId),
        },
      },
    });
  }

  await prisma.duration.update({
    where: { id },
    data: {
      duration: data.duration,
      buffets:
        data.buffets
        ? {
          create: data.buffets.map(id => ({
            buffet: { connect: { id } },
          }))
        }
        : undefined,
    }
  })

  return "success";
}

export async function findDurationById (id: number): Promise<DurationResponse | null> {
  return await prisma.duration.findUnique({
    where: { id },
    select: {
      duration: true,
      buffets: {
        select: {
          buffet: {
            select: { name: true }
          }
        }
      },
    }
  });
}

export async function allBuffets(): Promise<DurationResponse[]> {
  const allDurations = await prisma.duration.findMany({
    select: {
      id: true,
      duration: true,
      buffets: {
        select: {
          buffet: {
            select: { name: true }
          }
        }
      },
    }
  });

  // JSON.stringify() não consegue serializar valores do tipo BigInt (tipo do id), portanto precisa ser convertido antes.
  return allDurations.map(duration => ({
    ...duration,
    id: duration.id.toString()
  }));

}