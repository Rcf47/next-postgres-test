import prisma from "@/lib/prisma/prisma";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = Number(params.userId);
  const res = await request.json();
  const { newName, surname } = res;
  const result = await prisma.users.update({
    where: {
      id: userId,
    },
    data: {
      name: newName,
      surname: surname,
    },
  });
  return NextResponse.json(result);
}
