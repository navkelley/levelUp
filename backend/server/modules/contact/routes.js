import { Router } from 'express';
import * as ContactController from './controller';

const routes = new Router();

routes.route('/contact').get(ContactController.getContacts);
routes.route('/contact').post(ContactController.signup);
routes.route('/contact/:id').put(ContactController.updateEmail);
routes.route('/contact/:id').delete(ContactController.deleteContact);

routes.route('/getContactId').post(ContactController.getUserId);

export default routes;
