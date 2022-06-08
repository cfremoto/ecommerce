const { Router } = require('express')
const router = Router()
const product = require('./product.js')
const user = require('./user.js')

router.use('/api/users', user)
router.use('/api/products', product)

module.exports = router
