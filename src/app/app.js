import express from "express";
import cors from "cors";

const originCallback = (origin, callback) => {
  const allowedOrigins = ["http://localhost:5173"];
  const isAllowed = allowedOrigins.includes(origin);
  isAllowed ? callback(null, true) : callback(new Error("Not allowed by CORS"));
};
const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(
  cors({
    origin: originCallback,
  })
);
export default app;
