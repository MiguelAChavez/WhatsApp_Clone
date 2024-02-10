import * as services from "../services/Users.services.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await services.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserById = async (req, res) => {
  const userId = req.validatedId;

  try {
    const user = await services.getUserById(userId);

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  const data = req.validationResult;

  try {
    const createdUser = await services.createUser(data);
    res.status(201).json(createdUser);
  } catch (error) {
    if (error.code === "P2002" && error.meta?.target === "User_phone_key") {
      return res.status(400).json({ message: "Phone number already exists" });
    }

    res.status(500).json({ message: "Error creating user" });
  }
};

export const updateUser = async (req, res) => {
  const userId = req.validatedId;
  const data = req.validationResult;

  try {
    const updatedUser = await services.updateUser(userId, data);

    if (updatedUser) {
      return res.status(200).json(updatedUser);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    if (error.code === "P2002" && error.meta?.target === "User_phone_key") {
      return res.status(400).json({ message: "Phone number already exists" });
    }
    res.status(500).json({ error: "Error updating user" });
  }
};

export const deleteUser = (req, res) => {
  const userId = req.validatedId;

  try {
    const userDeleted = services.deleteUser(userId);

    if (userDeleted) {
      return res.status(200).json(userDeleted);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
};
