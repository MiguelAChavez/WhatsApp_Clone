import { Router } from "express";
import * as userController from "../controllers/User.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { userSchema } from "../schemas/user.schema.js";

const router = Router();

router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getUserById);
router.post("/", validateSchema(userSchema), userController.createUser);
router.put("/:userId", validateSchema(userSchema), userController.updateUser);
router.delete("/:userId", userController.deleteUser);

export default router;
