import prisma from "../../prisma/prismaClient.js";

export const findMany = async () => {
  return await prisma.region.findMany();
};
