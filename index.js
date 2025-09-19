const express = require('express');
const path = require('path');
const pug = require('pug');
const env = require('dotenv').config();
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes')
const apmcRouter = require('./routes/apmcRoutes')
const firmRouter = require('./routes/firmRoutes')
//const { config } = require('process');
const app = express();
//const myhost=process.env.host;
// DB Connection
require('./config/db');
// Middleware
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // Points to the main 'views' directory
app.use(express.static(path.join(__dirname, 'public')));
//app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
  secret: '123456789', // A strong secret for signing the session ID cookie
  resave: false, // Don't save session if unmodified
  loggedin:false,
  saveUninitialized: true, // Save uninitialized sessions
  cookie: { secure: false } // Set to true in production with HTTPS
}));

// Routes

app.use('/admin',adminRouter);
app.use('/',apmcRouter);
app.use('/',firmRouter)
app.use('/',userRoutes);

//session.set()
// Server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
  //console.log({myhost})
});
