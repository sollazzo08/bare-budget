import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ['query'] });

export const getAllUsers = async () => {

  return await prisma.user.findMany();

};
