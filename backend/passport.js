const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy

//Google
const GOOGLE_CLIENT_ID =
  '226295236324-evsm1r9vhaedvu7titl8qv51rb6ctgak.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'


//Facebook
const FACEBOOK_APP_ID = '190780317139896'
const FACEBOOK_APP_SECRET = 'a13fe117e90a8450e51b093f250bad14'

//Google
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile)
    }
  )
)


//Facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: '/auth/facebook/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile)
    }
  )
)

passport.serializeUser((user, done)=>{
 done(null, user)
})

passport.deserializeUser((user, done)=>{
 done(null, user)
})