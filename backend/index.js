const express = require('express')
const session = require('express-session')
const cors = require('cors')
const passportSetup = require('./passport')
const passport = require('passport')
const authRoute = require('./routes/auth')
const app = express()

app.use(
  session({
    secret: 'northstar',
    resave: false,
    name: 'session',
    cookie: { 
      secure: false, 
      maxAge: 24 * 60 * 60 * 100 
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  })
)

app.use('/auth', authRoute)

app.listen('5000', () => {
  console.log('server is running!')
})
