const express = require('express')
const router = express.Router()
const todo = require('./todo.router')

router.use('/todo', todo);

module.exports = router