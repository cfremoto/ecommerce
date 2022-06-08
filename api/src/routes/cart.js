const { Router } = require('express')
const router = Router()
const { getCart } = require('../controller.pedido.js')

router.get('/', getCart)

module.exports = router
