const { Router } = require('express')
const router = Router()
const { getPedidos } = require('../controller.pedido.js')

router.get('/', getPedidos)

module.exports = router
