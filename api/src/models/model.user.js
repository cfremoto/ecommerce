const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  estado: {
    type: Boolean,
    default: true
  }

}, { timestamps: true, versionKey: false })

userSchema.methods.toJSON = function () {
  const { password, ...user } = this.toObject()
  return user
}

module.exports = model('User', userSchema)
