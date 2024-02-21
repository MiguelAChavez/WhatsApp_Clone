import cors from "cors";

const ALLOWED_ORIGINS = ["http://localhost:5173"];
/**
 * Middleware que configura CORS para permitir solicitudes solo desde un origen específico.
 * @returns {Function} Middleware de CORS configurado.
 */
export const corsMiddleware = () =>
  cors({
    origin: (origin, callback) => {
      const isAllowed = ALLOWED_ORIGINS.includes(origin);
      if (!origin) return callback(null, true);
      isAllowed ? callback(null, true) : callback(new Error("Not allowed by CORS"));
    },
  });
