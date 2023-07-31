const logger = require('../utils/logger')
const { createUser } = require('../services/user.services')

async function createUserHandler(req, res) {
  try {
    const user = await createUser(req.body)
  } catch (err) {
    logger.err(err)
    res.status(409).send(err)
  }
}

module.exports = {
    createUserHandler,
}