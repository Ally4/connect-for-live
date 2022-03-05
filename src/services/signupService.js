import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';

import Users from "../model/authentication"

import { successfullResponse, failureResponse, serverErrorResponse } from '../utils/responses.utils.js';

dotenv.config();

class Signup {
  static async signup(req, res, next) {
    try{
    const { firstName, lastName, email, phonenumber, role, password, confirmPassword } = req.body;
    const registered = await Users.findOne({
      where: { email }
    });

    if ( registered ) {
      return failureResponse(res, 409, "This user is already in the system" )
    }


    if ( password !== confirmPassword ) {
      return failureResponse(res, 400, "Your password is different from the confirm password")
    }
    
    const passwordCryption = bcryptjs.hashSync(req.body.password.trim(), 10);
    const user = {
      ...req.body,
      password: passwordCryption
    };
    
    const newUser = await Users.create(user);
    const payload = { firstName, lastName, email, phonenumber, role };
    const token = jwt.sign(payload, process.env.KEY);
    return successfullResponse(res, 201, 'Now you are registered in the system', { payload, token })
  }  
    catch (error) {
      return serverErrorResponse(res, 500, `The is the error from the server ${error}`)
  }
}
}

export default Signup;
