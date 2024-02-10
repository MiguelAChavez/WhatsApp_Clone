import { Router } from "express";
import * as RegionController from "../controllers/region.controller.js";

const routes = new Router();

routes.get("/", RegionController.getAll);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default routes;
