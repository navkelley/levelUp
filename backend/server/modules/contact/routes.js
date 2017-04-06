import { Router } from 'express';
import * as ContactController from './controller';

const routes = new Router();

routes.route('/contact').post(ContactController.signup);

export default routes;
