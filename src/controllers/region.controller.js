import * as services from "../services/region.services.js";

export const getAll = async (req, res) => {
  return res.json(await services.findMany());
};
