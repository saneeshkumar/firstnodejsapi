import express from 'express';
import todoController from '../controllers/todos-controller';

//set up the express app
const todosRouter = express.Router();
export default todosRouter;

todosRouter.get('/api/v1/todos', todoController.getAllTodos);
todosRouter.get('/api/v1/todos/:id', todoController.getTodo);
todosRouter.post('/api/v1/todos', todoController.createTodo);
todosRouter.put('/api/v1/todos/:id', todoController.updateTodo);
todosRouter.delete('/api/v1/todos/:id', todoController.deleteTodo);