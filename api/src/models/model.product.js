const { model, Schema } = require('mongoose')

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: Array
  },
  size: {
    type: Array
  },
  color: {
    type: Array
  }
}, { timestamps: true, versionKey: false })

module.exports = model('Product', productSchema)
