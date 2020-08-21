import { Router } from "express";
const routes = Router();

import ClassesController from "./controllers/ClassesController";
const classesController = new ClassesController();

import ConnectionsController from "./controllers/ConnectionsController";
const connectionsController = new ConnectionsController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;