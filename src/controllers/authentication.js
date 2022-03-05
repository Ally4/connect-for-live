import  signupService  from "../services/signupService.js";
import  signinService  from "../services/signinService.js";
import  welcomeService  from "../services/welcomeService.js";


class Authentication {
  static async signupController(req, res, next) {
    const data = await signupService.signup(req, res, next);
    return data;
  }

  static async signinController(req, res, next) {
    const data = await signinService.signin(req, res, next);
    return data;
  }

  static async welcomeController(req, res, next) {
    const data = await welcomeService.signin(req, res, next);
    return data;
  }
}

export default Authentication;
