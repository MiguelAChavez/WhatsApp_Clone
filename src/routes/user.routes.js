import { Router } from "express";
import * as userController from "../controllers/User.controller.js";
import { validateSchema, validateId } from "../middlewares/validator.middleware.js";
import { userSchema } from "../schemas/user.schema.js";

const router = Router();

router.get("/", userController.getAllUsers);

router.get("/:userId", validateId("userId"), userController.getUserById);

router.post("/", validateSchema(userSchema), userController.createUser);

router.put("/:userId", validateId("userId"), validateSchema(userSchema), userController.updateUser);

router.patch(
  "/:userId",
  validateId("userId"),
  validateSchema(userSchema, true),
  userController.updateUser
);

router.delete("/:userId", validateId("userId"), userController.deleteUser);

export default router;
