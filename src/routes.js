const { createUserHandler } = require('./controller/user.controller')
const { validateResource } = require('./middleware/validateResource')
const { userSchema } = require('./schema/user.schema.zod')

function routes(app) {

  app.post('/users', validateResource(userSchema), createUserHandler)

  app.get('/hello', (req, res) => {
    res.sendStatus(200)
  })

}

module.exports = routes
