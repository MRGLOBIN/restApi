const express = require('express')
const config = require('config')

const connectToDB = require('./utils/connect')
const log = require('./utils/logger')

const routes = require('./routes')
const { deserializeUser } = require('./middleware/deserializeUser')

const PORT = config.get('port')

const app = express()

app.use(express.json())

app.use(deserializeUser)

app.listen(PORT, async () => {
  await connectToDB()

  routes(app)

  log.info(`Server is listening on http://localhost:${PORT}`)
})
