const express = require('express')
var app = express()

app.get('/*', express.static(require('path').join(__dirname, './dist')))

app.listen(3000, () => {
  console.log('>> server start...')
  console.log('>> Listening on localhost:3000')
})
