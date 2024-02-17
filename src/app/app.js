import express from "express";
import { corsMiddleware } from "../middlewares/Cors.middleware";

const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(corsMiddleware());
export default app;
