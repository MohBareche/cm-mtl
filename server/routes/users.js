const express = require('express')
const router = express.Router()
const User = require('../controllers/user')

// login
router.post('/auth', User.auth)

// register
router.post('/register', User.register)

module.exports = router
