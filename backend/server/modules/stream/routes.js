import { Router } from 'express';
import * as StreamerController from './controller';

const routes = new Router();

routes.route('/streamer').get(StreamerController.streamersFollowedByUser);
routes.route('/streamer').post(StreamerController.followStreamer);
routes.route('/streamer/:id').delete(StreamerController.unfollowStreamer);

export default routes;
