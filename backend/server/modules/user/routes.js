import { Router } from 'express';
import * as UserController from './controller';
import { requireLogin } from '../../helpers';

const routes = new Router();

routes.route('/register').post(UserController.signup);
routes.route('/login').post(requireLogin, UserController.login);

export default routes;
