/**
 * Middleware para validar los datos de entrada según un esquema dado utilizando Zod.
 * @param {z.ZodObject<any, any>} schema El esquema Zod utilizado para validar los datos de entrada.
 */
export const validateSchema = (schema) => (req, res, next) => {
  try {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      throw result.error;
    }
    next();
  } catch (error) {
    return res.status(400).json({ message: JSON.parse(error.message) });
  }
};
