import { Joi } from "celebrate";

export const createDurationSchema = Joi.object({
  id: Joi.number().required(),
  duration: Joi.number().required(),
  active: Joi.boolean(),
  buffets: Joi.array().items(Joi.number()),

});

export const updateDurationSchema = Joi.object({
  duration: Joi.number(),
  active: Joi.boolean(),
  buffets: Joi.array().items(Joi.number()),

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
