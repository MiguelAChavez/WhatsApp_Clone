import prisma from "../../prisma/prismaClient.js";

export const getAllUsers = async () => {
  try {
    return await prisma.user.findMany({
      include: {
        region: {
          select: { countryCode: true },
        },
      },
    });
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    return await prisma.user.findUnique({
      where: { user_id: parseInt(userId) },
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createUser = async (userData) => {
  try {
    return await prisma.user.create({ data: userData });
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (idUser, newData) => {
  try {
    return await prisma.user.update({
      where: { user_id: parseInt(idUser) },
      data: newData,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    return await prisma.user.delete({
      where: { user_id: parseInt(userId) },
    });
  } catch (error) {
    throw error;
  }
};
