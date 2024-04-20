import { Joi } from "celebrate";

export const createOptionalSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  qtt: Joi.number().required(),
  active: Joi.boolean(),
  types: Joi.array().items(Joi.number()),
  events: Joi.array().items(Joi.number()),
});

export const updateOptionalSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  qtt: Joi.number(),
  active: Joi.boolean(),
  types: Joi.array().items(Joi.number()),
  events: Joi.array().items(Joi.number()),
});

export async function validateData(data: any, schema: Joi.Schema):
Promise<{ isValid: boolean; errors?: string[] }> {

  try {
    await schema.validateAsync(data);
    return { isValid: true };

  } catch (error) {
    const errors = error.details.map((detail: any) => detail.message);
    return { isValid: false, errors };
  }
}