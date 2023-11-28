require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const methodOveride = require('method-override');
const holder = require('./models');
const trucking = require('./models');
const user = require('./models')

// environment variables
SECRET_SESSION = process.env.SECRET_SESSION;

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(methodOveride('_method'));

app.use(flash());            // flash middleware

app.use(session({
  secret: SECRET_SESSION,    // What we actually will be giving the user on our site as a session cookie
  resave: false,             // Save the session even if it's modified, make this false
  saveUninitialized: true    // If we have a new session, we save it, therefore making that true
}));

// add passport
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});


app.use('/auth', require('./controllers/auth'));
app.use('/user', require('./controllers/user'));
app.use('/holder', require('./controllers/holder'));
app.use('/trucking', require('./controllers/trucking'));

// Add this below /auth controllers
app.get('/profile', isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get(); 
  res.render('profile', { id, name, email });
});
app.get('/user', (req, res) => {
  const { id, name, email, profession, holder } = req.user.get(); 
  res.render('user', { id, name, email, profession, holder });
});
app.get('/holder', (req, res) => {
  const { id, truckBrand, truckTrans, workType, truckType } = req.user.get(); 
  res.render('holder', { id, truckBrand, truckTrans, workType, truckType });
});
app.get('/trucking', (req, res) => {
  const { id, textBox } = req.user.get(); 
  res.render('trucking', { id, textBox });
});


app.get('/', (req, res) => {
  res.render('index');
})

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
