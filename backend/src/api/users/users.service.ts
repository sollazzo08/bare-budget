import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ['query'] });

export const createUser = async (data: {username: string; email: string; password: string}) => {

  return await prisma.user.create({
    data: {
        username: "test",
        email: "test",
        password: "test"
    }
  });
};
