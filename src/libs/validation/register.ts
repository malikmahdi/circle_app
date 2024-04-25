import joi from "joi";

export const registerValidation = joi.object({
  fullname: joi.string().required(),
  username: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});
