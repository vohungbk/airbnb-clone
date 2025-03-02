'use server';

import { redirect } from 'next/navigation';
import { prisma } from './lib/db';

export async function createAirbnb({ userId }: { userId: string }) {
  const data = await prisma.home.findFirst({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (data === null) {
    const data = await prisma.home.create({
      data: {
        userId,
      },
    });
    return redirect(`/create/${data.id}/structure`);
  } else if (!data.addedCategory && !data.addedDescription && !data.addedLocation) {
    return redirect(`/create/${data.id}/structure`);
  }
}
