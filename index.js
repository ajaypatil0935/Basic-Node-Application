require('dotenv').config()

const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req , res) => {
  res.send("Aj0935")
})

app.get('/youtube' , (req ,res) => {
    res.send("<H2>Chai Aur Code</H2>")
})

app.get('/logins' , (req , res) => {
    res.send("<H1>Login Page</H1>")
  })  

app.get('/login' , (req , res) => {
  res.send("Login Page")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

