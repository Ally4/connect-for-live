import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';


import Users from "../model/authentication"

import { successfullResponse, failureResponse, serverErrorResponse } from '../utils/responses.utils.js';

dotenv.config();

class Signin {
static async signin(req, res, next) {

  try{
    const { email, password } = req.body;
  const registered = await Users.findOne({
    where: { email }
  });

  if (!registered) {
    return failureResponse(res, 404, 'You are not registered in the system')
  }

  const compare = bcryptjs.compareSync(password, registered.password);
  if (!compare){
    return failureResponse(res, 401, 'Check your credentials and try again')
  }
  
  const payload = { firstName: registered.firstName, lastName: registered.lastName, email: registered.email, phoneNumber: registered.phonenumber, role: registered.role };
  const token = jwt.sign(payload, process.env.KEY);
  return successfullResponse(res, 200, 'User is successfully logged in!.', token )
}catch (error) {
  return serverErrorResponse(res, 500, `The is the error from the server ${error}`)
}
}
}

export default Signin;
