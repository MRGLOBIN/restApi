const userModel = require('../models/user.model')
const { omit } = require('lodash')

async function createUser(input) {
  try {
    const user = await userModel.create(input)
    return omit(user, 'password')
  } catch (err) {
    throw new Error(err)
  }
}

async function validatePassword({email, password}) {
  const user = await userModel.findOne({ email })

  if (!user) {
    return false
  }

  const isvalid = await user.comparePassword(password)
  
  if (!isvalid) {
    return false
  }
  return omit(isvalid, 'password')
}

module.exports = {
  createUser,
  validatePassword,
}
