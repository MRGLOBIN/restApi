function routes(app) {
  app.get('/hello', (req, res) => {
    res.sendStatus(200)
  })
}

module.exports = routes
