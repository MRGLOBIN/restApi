const { get } = require('lodash')
const { verifyJwt } = require('../utils/jwt.utils')
const { reIssueAccessToken } = require('../services/session.service')

const deserializeUser = async (req, res, next) => {
  const accessToken = get(req, 'headers.authorization', '').replace(
    /^Bearer\s/,
    ''
  )

  const refreshToken = get(req, 'headers.x-refresh')

  if (!accessToken) {
    return next()
  }

  const { decoded, expired } = verifyJwt(accessToken)
  if (decoded) {
    res.locals.user = decoded
    return next()
  }

  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken })

    if (newAccessToken) {
      res.setHeader('x-access-token', newAccessToken)
    }

    const result = verifyJwt(newAccessToken)
    res.locals.user = result.decoded._doc

    console.log(result.decoded._doc)
    return next()
  }

  return next()
}

module.exports = {
  deserializeUser,
}
