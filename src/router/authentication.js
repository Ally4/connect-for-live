import express from 'express';

import authenticationController from '../controllers/authentication.js';
import authenticationValidation from '../validations/authenticationValidations.js'

const authenticationControllerRouters = express.Router();

authenticationControllerRouters.post('/api/v1/signup', authenticationValidation.signupValidation, authenticationController.signupController);

authenticationControllerRouters.post('/api/v1/signin', authenticationValidation.signinValidation, authenticationController.signinController);

authenticationControllerRouters.get('/api/v1/welcome', authenticationController.welcomeController);

export default authenticationControllerRouters;
