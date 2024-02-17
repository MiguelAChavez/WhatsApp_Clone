import cors from "cors";
/**
 * Middleware que configura CORS para permitir solicitudes solo desde un origen específico.
 * @returns {Function} Middleware de CORS configurado.
 */
export const corsMiddleware = () =>
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = ["http://localhost:5173"];
      const isAllowed = allowedOrigins.includes(origin);
      isAllowed ? callback(null, true) : callback(new Error("Not allowed by CORS"));
    },
  });
