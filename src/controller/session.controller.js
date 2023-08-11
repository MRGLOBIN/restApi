const config = require('config')
const { validatePassword } = require('../services/user.services')
const { createUserSession, findSessions } = require('../services/session.service')
const { signjwt } = require('../utils/jwt.utils')

async function createUserSessionHandler(req, res) {

  const user = await validatePassword(req.body)

  if (!user) {
    return res.status(401).send('invalid email or password')
  }
  const session = await createUserSession(user._id, req.get('user-agent' || ''))

  const accessToken = signjwt(
    { ...user, session: session._id },
    {
      expiresIn: config.get('accessTokenTtl'), // 15m
    }
  )
  
  const refreshToken = signjwt(
    { ...user, session: session._id },
    {
      expiresIn: config.get('refreshTokenTtl'), // 15m
    }
  )

  res.send({
    accessToken,
    refreshToken,
  })
}

async function getSessionsHandler(req, res) {
  const userId = res.locals.user._id

  const sessions = await findSessions({user: userId, valid: true})

  res.send(sessions)
}


module.exports = {
  createUserSessionHandler,
  getSessionsHandler
}