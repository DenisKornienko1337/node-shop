

/**
 * @modules
 */
const express        = require('express')
const app            = express()
const bodyParser        = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const bcrypt = require('bcrypt')
const saltRounds = 10
const cookieParser = require('cookie-parser')


const localStrategy = require('passport-local').Strategy

// app.use(session({
//     secret: 'development',
//     resave: false,
//     saveUninitialized: false,
//     store: store,
//     cookie: {
//         httpOnly: true,
//         path: '/',
//         secure: false
//     }
// }))

/**
 * @connect
 */


/**
 * @app_middle
 */
// app.set('io', io)
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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



passport.use(new localStrategy((username, password, done) => {
    Users.findOne({ username: username }, async function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        bcrypt.compare(password, user.password, (err, res) => {
          if(res) return done(null, user,  { message: 'Success!' });
          else return done(null, false, { message: 'Incorrect password.' });
        })        
      });
}));

app.listen(8081, () => {

})