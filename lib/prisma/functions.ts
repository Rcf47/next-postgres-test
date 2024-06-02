import prisma from "@/lib/prisma/prisma";

export async function getUsers() {
  const users = await prisma.users.findMany();
  return users;
}
