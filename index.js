const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
const session = require('express-session');


// connect to the database and load models
require('./server/models').connect(config.dbUri);


const app = express();


// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));


// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({extended: false}));


// pass the passport middleware
app.use(passport.initialize());


// Use the session middleware
app.use(session({ 
	secret: 'izzy',
	resave: true,
  saveUninitialized: true,
	cookie: { 
		maxAge: 60000 
	}
}))


// Access the session as req.session
// app.get('/todo', function(req, res, next) {
//   var sess = req.session
//   if (sess.views) {
//     sess.views++
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<p>views: ' + sess.views + '</p>')
//     res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
//     res.end()
//   } else {
//     sess.views = 1
//     res.end('welcome to the session demo. refresh!')
//   }
// });


// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


// pass the authorization checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);


// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);


app.get("/*", function(req, res) {
	res.sendFile(__dirname + '/server/static/index.html')
});


// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});