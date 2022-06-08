const { model, Schema } = require('mongoose')

const cartSchema = new Schema({
  userId: {
    type: String
  },
  products: [{
    productId: {
      type: String
    },
    quantity: {
      type: Number,
      default: 1
    }
  }]
}, { timestamps: true, versionKey: false })

module.exports = model('Cart', cartSchema)
