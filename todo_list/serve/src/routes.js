const express = require('express');
const connection = require('./database/connection');
const taskController = require('./controllers/Task_Controller');

const routes = express.Router();


routes.post('/tasks', taskController.create);
routes.get('/tasks', taskController.index);
routes.delete('/tasks/:id', taskController.delete);
module.exports = routes;