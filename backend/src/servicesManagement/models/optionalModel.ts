import { PrismaClient } from '@prisma/client'
import { AddOptionalParams, OptionalResponse } from '../interfaces/IOptional'

const prisma = new PrismaClient()

export async function createOptional(data: AddOptionalParams)
:Promise<string> {
  await prisma.optional.create({
    data: {
      id: new Date().getTime(),
      name: data.name,
      description: data.description,
      qtt: data.qtt,
      active:
        data.active
        ? data.active
        : undefined,
      types:
        data.types
        ? {
          create: data.types.map(id => ({
            type: { connect: { id } },
          }))
        }
        : undefined,
      events:
        data.events
        ? {
          create: data.events.map(id => ({
            event: { connect: { id } },
          }))
        }
        : undefined,
    }
  })
  return "success"
};


export async function updateOptional(
  id: bigint,
  data: Partial<AddOptionalParams>
  ):Promise<string> {

  const types = data.types
  if (types) {
    const existingTypes = await prisma.typesOnOptionals
    .findMany({
      where: { optionalId: id },
      select: { typeId: true },
    });

    const typesToRemove = existingTypes.filter(optional =>
      !types.includes(optional.typeId));

      await prisma.typesOnOptionals.deleteMany({
      where: {
        optionalId: id,
        typeId: {
          in: typesToRemove.map(optional => optional.typeId),
        },
      },
    });
  }

  const events = data.events
  if (events) {
    const existingEvents = await prisma.optionalsOnEvents
    .findMany({
      where: { optionalId: id },
      select: { eventId: true },
    });

    const eventsToRemove = existingEvents.filter(optional =>
      !events.includes(optional.eventId));

      await prisma.optionalsOnEvents.deleteMany({
      where: {
        optionalId: id,
        eventId: {
          in: eventsToRemove.map(optional => optional.eventId),
        },
      },
    });
  }

  await prisma.optional.update({
    where: { id },
    data: {
      name: data.name,
      description: data.description,
      qtt: data.qtt,
      active: data.active,
      types:
        data.types
        ? {
          create: data.types.map(id => ({
            type: { connect: { id } },
          }))
        }
        : undefined,
      events:
        data.events
        ? {
          create: data.events.map(id => ({
            event: { connect: { id } },
          }))
        }
        : undefined,
    }
  })

  return "success";
}

export async function findOptionalById (id: bigint)
: Promise<OptionalResponse | null> {

  return await prisma.optional.findUnique({
    where: { id },
    select: {
      name: true,
      description: true,
      qtt: true,
      active: true,
      types: { select: {
        type: { select: { type: true, price: true }}
      }},
      events: { select: {
        event: { select: {
            date: true,
            client: { select: { name: true }}
        }}
      }},
    }
  });
}

export async function allOptionals()
: Promise<OptionalResponse[]> {

  const allOptionals = await prisma.optional.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      qtt: true,
      active: true,
      types: { select: {
        type: { select: { type: true, price: true }}
      }},
      events: { select: {
        event: { select: {
            date: true,
            client: { select: { name: true }}
        }}
      }},
    }
  });

  // JSON.stringify() não consegue serializar valores do tipo BigInt (tipo do id), portanto precisa ser convertido antes.
  return allOptionals.map(optional => ({
    ...optional,
    id: optional.id.toString()
  }));

}