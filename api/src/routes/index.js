const { Router } = require('express')
const router = Router()
const product = require('./product.js')
const user = require('./user.js')
const pedido = require('./pedido.js')
const auth = require('./auth.js')

//router.use('/api/users', user)
//router.use('/api/products', product)
//router.use('/api/pedidos', pedido)
router.use('/api/auth', auth)

module.exports = router
