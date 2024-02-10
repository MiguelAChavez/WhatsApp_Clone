/**
 * Middleware para validar los datos de entrada según un esquema dado utilizando Zod.
 * @param {z.ZodObject<any, any>} schema El esquema Zod utilizado para validar los datos de entrada.
 * @param {boolean} [partial=false] Indica si se debe realizar una validación parcial. Por defecto, es falso, lo que significa que se realiza una validación completa.
 */
export const validateSchema =
  (schema, partial = false) =>
  (req, res, next) => {
    try {
      //determino si la validación es completa o parcial.
      const validationSchema = partial ? schema.partial() : schema;
      const result = validationSchema.safeParse(req.body);

      if (!result.success) {
        throw result.error;
      }
      // Asigna el resultado de la validación a req
      req.validationResult = result.data;
      next();
    } catch (error) {
      return res.status(400).json({ message: JSON.parse(error.message) });
    }
  };

/**
 * Middleware para validar el formato del ID de usuario y convertirlo a número.
 */
export const validateId =
  (paramName = "id") =>
  (req, res, next) => {
    const id = req.params[paramName];
    const parsedId = parseInt(id);

    if (Number.isNaN(parsedId) || parsedId <= 0 || !Number.isInteger(parsedId)) {
      // Si el ID de usuario no es válido, devolver una respuesta de error
      return res.status(400).json({ message: "Invalid ID" });
    }

    req.validatedId = parsedId;
    next();
  };
