const express = require('express');
const userController = require('../controllers/users');
const routes = express.Router();

routes.get('/', userController.getUser)
routes.post('/create', userController.createUser)
routes.patch('/update/:id', userController.updateUser)
routes.delete('/delete/:id', userController.deleteUser)


module.exports = routes;