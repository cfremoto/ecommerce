const bcrypt = require('bcrypt')
const User = require('../models/model.user.js')

const createUser = async (req, res) => {
  const oldUser = await User.findOne({ email: req.body.email })
  if (oldUser) return res.status(400).send('User already exists')
  const user = new User(req.body)
  const salt = bcrypt.genSalt()
  user.password = bcrypt.hashSync(req.body.password, salt)
  try {
    await user.save()
    res.send({ info: 'User created successfully', user })
  } catch (err) {
    res.status(401).send({ info: 'Error en servicio', err })
  }
}

module.exports = {
  createUser
}
