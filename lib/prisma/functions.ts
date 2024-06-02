import prisma from "@/lib/prisma/prisma";

async function getUsers() {
  const users = await prisma.users.findMany();
  return users;
}

export default getUsers;
