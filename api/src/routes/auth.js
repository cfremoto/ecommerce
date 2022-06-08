const { Router } = require('express')
const router = Router()
const { createUser } = require('../controllers/controller.auth.js')

router.post('/register', createUser)

module.exports = router
