const express = require('express');
const path = require('path');
const env = require('dotenv').config();
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const apmcRoutes = require('./routes/apmcRoutes');
const firmRoutes = require('./routes/firmRoutes');
const indexRoutes = require('./routes/indexrouter');
const apmcController = require('./contollers/apmcController');
const app = express();
const myhost=process.env.host;
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
  saveUninitialized: true, // Save uninitialized sessions
  cookie: { secure: false } // Set to true in production with HTTPS
}));

// Routes
//session.set()
app.use('/api',apmcRoutes);
app.use('/api',userRoutes);
app.use('/api',firmRoutes);
app.use('/',indexRoutes);
app.get('/',apmcController.listApmcs);

// Server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
  console.log({myhost})
});

app.get('/login', (req, res) => {
  req.session.username ='Vijay';
    if (req.session) {
        console.log("All session variables:");
        for (const key in req.session) {
            if (req.session.hasOwnProperty(key)) {
                console.log(`${key}: ${req.session[key]}`);
            }
        }
        res.send('Session variables logged to console.');
    } else {
        res.send('No session found.');
    }
});