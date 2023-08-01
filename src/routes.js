const { createUserHandler } = require('./controller/user.controller')
const { validateResource } = require('./middleware/validateResource')
const { userSchema } = require('./schema/user.schema.zod')

function routes(app) {
  app.get('/hello', (req, res) => {
    res.sendStatus(200)
  })

  app.post(('/users', validateResource(userSchema), createUserHandler))
}

module.exports = routes
