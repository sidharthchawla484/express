const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.send('Hello World Again!')
})
app.get('/about', (req, res) => {
    res.send('About page!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})