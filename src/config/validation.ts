// Global imports
import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().required(),
  API_SPORTS_KEY: Joi.string().required(),
  API_SPORTS_URL: Joi.string().required(),
});
