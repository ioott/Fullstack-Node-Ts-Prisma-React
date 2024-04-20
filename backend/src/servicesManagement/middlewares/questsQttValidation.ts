import { Joi } from "celebrate";

export const createGuestsQttSchema = Joi.object({
  id: Joi.number().required(),
  guestsQtt: Joi.number().required(),
  price: Joi.number().required(),
  active: Joi.boolean(),
  buffets: Joi.array().items(Joi.number()),

});

export const updateGuestsQttSchema = Joi.object({
  guestsQtt: Joi.number(),
  price: Joi.number(),
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
