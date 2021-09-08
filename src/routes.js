import { Router } from 'express';
import UserController from './app/controllers/UserController';
import MapControlsController from './app/controllers/MapControlsController';
import SessionController from './app/controllers/SessionController';
import SwaggerUi from 'swagger-ui-express';
import SwwagerDocs from '../swagger.json'
import authMiddleware from './app/middlewares/auth';


const routes = new Router();
routes.use('/api-docs', SwaggerUi.serve)
routes.get('/api-docs', SwaggerUi.setup(SwwagerDocs))
routes.post('/api/v1/login', SessionController.store);
routes.post('/api/v1/users', UserController.store);
routes.use(authMiddleware);
/*rotas so serao acessadas com o jwttoken*/
routes.put('/api/v1/users/:user_id', UserController.update);
routes.delete('/api/v1/users/:user_id', UserController.deleteOnlyUser);
routes.delete('/api/v1/users', UserController.deleteAllUsers);
routes.get('/api/v1/users/:user_id', UserController.listOnlyUser);
routes.get('/api/v1/users', UserController.listUsers);
routes.get('/api/v1/points', MapControlsController.listarPontos)

module.exports = routes;