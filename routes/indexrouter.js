const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  const loggedin=true;
  if (loggedin) {
    res.render('dashboard', { user: req.session.user });
  } else {
    res.render('user/login');
  }
});

// AJAX login
router.post('/login', (req, res) => {
  const { username, password } = req.body;                       

  // Dummy login check
  if (username === 'admin' && password === 'admin') {
    req.session.user = { name: 'Admin' };
    return res.json({ success: true });  
  }

  res.json({ success: false, message: 'Invalid credentials' });
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;
