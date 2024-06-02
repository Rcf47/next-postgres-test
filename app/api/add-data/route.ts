import prisma from "@/lib/prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();
  const { newName, surname } = res;
  const result = await prisma.users.create({
    data: {
      name: newName,
      surname: surname,
    },
  });
  return NextResponse.json(result);
}
