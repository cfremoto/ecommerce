const { Router } = require('express')
const router = Router()
const { getProducts } = require('../controllers/controller.product.js')

router.get('/', getProducts)

module.exports = router
