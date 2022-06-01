const express = require('express')
const router = express.Router()

const {getToDo, postToDo} = require('../controllers/todo.controller')

router.get('/', getToDo);
router.post('/', postToDo);
router.pull('/', pullToDo);
router.delete('/', deleteToDo);

module.exports = router ;