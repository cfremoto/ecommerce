const { Router } = require('express')
const router = Router()

const user = require('./user.js')

router.use('/api/users', user)

module.exports = router
