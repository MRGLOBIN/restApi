const express = require('express')
const config = require('config')

const connectToDB = require('./utils/connect')
const log = require('./utils/logger')

const PORT = config.get('port')

const app = express()

app.listen(PORT, async () => {
  log.info('hello')
  await connectToDB()
  console.log(`Server lstening on ${PORT} 1337`)
})
