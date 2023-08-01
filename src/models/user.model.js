const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const config = require('config')

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

userSchema.method.comparePassword = async candidatePassowrd => {
    return bcrypt.compare(candidatePassowrd, this.password).catch(err =>  false)
}

userSchema.pre('save', async (next) => {
  if (!this.isModified('password')) {
    return next()
  }
  const salt = await bcrypt.genSalt(config.get('saltRounds'))
  const hash = await bcrypt.hash(this.password, salt)

  this.password = hash

  return next()
})

const user = mongoose.model('user', userSchema)

module.exports = user
