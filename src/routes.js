const { createUserSessionHandler } = require('./controller/session.controller')
const { createUserHandler } = require('./controller/user.controller')
const { validateResource } = require('./middleware/validateResource')
const { createSessionSchema } = require('./schema/session.schema')
const { userSchema } = require('./schema/user.schema.zod')



function routes(app) {

  app.post('/users', validateResource(userSchema), createUserHandler)
  
  app.post('/session', validateResource(createSessionSchema), createUserSessionHandler)

  app.get('/hello', (req, res) => {
    res.sendStatus(200)
  })

}

module.exports = routes
