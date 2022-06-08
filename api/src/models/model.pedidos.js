const { model, Schema } = require('mongoose')

const pedidoSchema = new Schema({
  cliente: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  products: [{
    productId: {
      type: Schema.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number
    }
  }],
  amount: {
    type: Number,
    required: true
  },
  estado: {
    type: String,
    default: 'Pendiente'
  }
})

module.exports = model('Pedido', pedidoSchema)
