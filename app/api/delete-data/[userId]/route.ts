import prisma from "@/lib/prisma/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { userId: number } }
) {
  const id = Number(params.userId);

  const result = await prisma.users.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json(result);
}
