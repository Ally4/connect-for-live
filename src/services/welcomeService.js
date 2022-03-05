import { successfullResponse, failureResponse, serverErrorResponse } from '../utils/responses.utils.js';


class Welcome {
static async signin(req, res, next) {
  try{
  return successfullResponse(res, 200, 'Welcome to our wonderfull system!.' )
}catch (error) {
  return serverErrorResponse(res, 500, `The is the error from the server ${error}`)
}
}
}

export default Welcome;
