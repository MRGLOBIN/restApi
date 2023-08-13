const { get } = require('lodash')
const { verifyJwt } = require('../utils/jwt.utils')

const deserializeUser = (req, res, next) => {
  const accessToken = get(req, 'headers.authorization', '').replace(
    /^Bearer\s/,
    ''
  )

  if (!accessToken) {
    return next()
  }

  const { decoded, expired } = verifyJwt(accessToken)
  if (decoded) {
    res.locals.user = decoded
  }
  return next()
}

module.exports = {
  deserializeUser,
}
