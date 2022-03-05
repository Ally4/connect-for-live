import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { failureResponse, serverErrorResponse } from "../utils/responses.utils";

dotenv.config();

class AuthenticationMiddleware {
static tokenAuthentication = (req, res, next) => {
  try {
  jwt.verify(req.token, process.env.KEY, (err, InUser) => {
    if (err) {
      return failureResponse(res, 401, 'Wrong token or no token, check it again')
    }
    next();
  });
} catch (error) {
  return serverErrorResponse( res, 500, `This is the server error: ${error.details[0].message.replace(/"/g,"")}!.`)}
}
};


export default AuthenticationMiddleware;
