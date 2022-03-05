import joi from "joi";

import { failureResponse, serverErrorResponse } from "../utils/responses.utils.js";


class AuthenticationValidation {

static signupValidation = (req, res, next) => {
  try {
    const validationSchema = joi.object({
      firstName: joi.string().required(),
      lastName: joi.string().required(),
      email: joi.string().required(),
      phonenumber: joi.string().required(),
      role: joi.string().required().valid("admin","user", "teacher", 'student', 'headmaster'),
      password: joi.string().required(),
      confirmPassword: joi.string().required(),
    });

    const { error } = validationSchema.validate(req.body);
    if (error)
      return failureResponse( res, 400, `This is the validation error: ${error.details[0].message.replace(/"/g,"")}!.`
      );
    return next();
  } catch (error) {
    return serverErrorResponse( res, 500, `This is the server error: ${error.details[0].message.replace(/"/g,"")}!.`
    );
  }
};

static signinValidation = (req, res, next) => {
  try {
    const validationSchema = joi.object({
      email: joi.string().required(),
      password: joi.string().required(),
    });

    const { error } = validationSchema.validate(req.body);
    if (error)
      return failureResponse( res, 400, `This is the validation error: ${error.details[0].message.replace(/"/g,"")}!.`
      );
    return next();
  } catch (error) {
    return serverErrorResponse( res, 500, `This is the server error: ${error.details[0].message.replace(/"/g,"")}!.`
    );
  }
};
}

export default AuthenticationValidation;
