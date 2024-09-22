const express = require('express');
const router = express.Router();
const taskController = require('./controller');

router.get('/tasks', taskController.getTasks);

router.post('/tasks', taskController.addTasks);

router.patch('/tasks/:id', taskController.updateTask);

router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;