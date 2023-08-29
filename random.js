const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/blabla', (req, res) => {
  res.send('hello world')
})

app.get('/blabla2', (req, res) => {
    res.send('Etwas')
})

app.use(express.static('public'))

app.listen(process.env.PORT || 3000)

app.listen(3000, "0.0.0.0", () => {
  console.log(`Listening to request on http://localhost:${3000}`)
})

// Albinuta
/*app.listen(3000, "192.168.0.104", () => {
  console.log(`Listening to request on http://localhost:${3000}`)
})*/

// Hotspot
/*app.listen(3000, "192.168.251.88", () => {
  console.log(`Listening to request on http://localhost:${3000}`)
})*/