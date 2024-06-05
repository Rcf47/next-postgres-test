import prisma from "@/lib/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = Number(params.userId);
  const result = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });
  return NextResponse.json(result);
}
