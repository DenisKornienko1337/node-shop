

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
const cookieParser = require('cookie-parser')
const User = require('./models/User')
const localStrategy = require('passport-local').Strategy

const sqlSessionStore = new SessionStore({
  db: sequelize,
})
app.use(cookieParser())

app.use(session({
    secret: 'development',
    resave: false,
    saveUninitialized: false,
    store: sqlSessionStore,
    cookie: {
        httpOnly: true,
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

app.listen(8081, () => {

})