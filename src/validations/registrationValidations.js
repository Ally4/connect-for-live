import joi from "joi";

import { failureResponse, serverErrorResponse } from "../utils/responses.utils.js";

class RegistrationValidation {

static registrationValidation = (req, res, next) => {
  try {
    const validationSchema = joi.object({
      firstName: joi.string().required(),
      lastName: joi.string().required(),
      classe: joi.string().required(),
      adult_contact: joi.string().required(),
      dateOfBirth: joi.string().required(),
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

static updateRegistrationValidation = (req, res, next) => {
  try {
    const validationSchema = joi.object({
      firstName: joi.string(),
      lastName: joi.string(),
      classe: joi.string().required(),
      adult_contact: joi.string().required(),
      dateOfBirth: joi.string().required(),
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

export default RegistrationValidation;
