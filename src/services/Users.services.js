import prisma from "../../prisma/prismaClient.js";

export const getAllUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw new Error("Error al recuperar usuarios: " + error.message);
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
    console.log(error);
    throw new Error("Error al crear usuario: " + error.message);
  }
};

export const updateUser = async (idUser, newData) => {
  try {
    return await prisma.user.update({ where: idUser, data: newData });
  } catch (error) {
    throw new Error("Error al actualizar usuario: " + error.message);
  }
};

export const deleteUser = async (userId) => {
  try {
    return await prisma.user.delete({ where: parseInt(userId) });
  } catch (error) {
    throw new Error("" + error.message);
  }
};
