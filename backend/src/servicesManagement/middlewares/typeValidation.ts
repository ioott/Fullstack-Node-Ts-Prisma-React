import { Joi } from "celebrate";

export const createTypeSchema = Joi.object({
  id: Joi.number().required(),
  type: Joi.string().required(),
  price: Joi.number().required(),
  active: Joi.boolean(),
  optionals: Joi.array().items(Joi.number()),
});

export const updateTypeSchema = Joi.object({
  type: Joi.string(),
  price: Joi.number(),
  active: Joi.boolean(),
  optionals: Joi.array().items(Joi.number()),
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
