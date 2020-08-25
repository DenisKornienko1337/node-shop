/**
 * @modules
 */
const express        = require('express')
const app            = express()
const Sequelize = require('sequelize');
const sequelize = require('./utils/dbconnect');
const bodyParser        = require('body-parser')
const session = require('express-session')
const SessionStore = require('express-session-sequelize')(session.Store);
const passport = require('passport')
const bcrypt = require('bcrypt')
const saltRounds = 10
var cors = require('cors')
const cookieParser = require('cookie-parser')
const User = require('./models/User')
const localStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '377248449724-cbkjkip70p9ctb02ko37crihr4jqs07n'
const GOOGLE_CLIENT_SECRET = 'DUXXOvZcErGo6wd6Cqb6rEwE'

var corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
}
app.use(cors(corsOptions))

const sqlSessionStore = new SessionStore({
  db: sequelize,
})
app.use(cookieParser())


//ssljdjdlfmjke

app.use(session({
    secret: 'development',
    resave: false,
    saveUninitialized: false,
    store: sqlSessionStore,
    cookie: {
        httpOnly: false,
        path: '/',
        secure: false
    }
}))

/**
 * @connect
 */


/**
 * @app_middle
 */
// app.set('io', io)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

/**
 * @routes
 */

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/auth.js')
app.use('/auth', authRoutes)

passport.serializeUser((user, done) => {
  done(null, user)
});
passport.deserializeUser((user, done) => {
  done(null, user)
});



passport.use(new localStrategy(async(username, password, done) => {
  let user = await User.findOne({where: {username: username}})
  if (!user) {
    return done(null, false, { message: 'Incorrect username.' });
  }
  bcrypt.compare(password, user.password, (err, res) => {
    if(res) return done(null, user,  { message: 'Success!' });
    else return done(null, false, { message: 'Incorrect password.' });
  })
}));

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8081/auth/google"
},
function(accessToken, refreshToken, profile, done) {
  User.findOne({where: {googleId: profile.id}})
    .then(user => {
      console.log('User:', user)
      if(user) {
        return done(null, user);
      } else {
        User.create({
          googleId: profile.id
        })
        .then(newUser => {
          return done(null, newUser);
        })
      }
    })
    .catch(err => console.log(err))
}
));

app.listen(8081, () => {

})