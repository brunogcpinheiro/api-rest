const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const authMiddleWare = require('./middlewares/auth');

const controllers = requireDir('./controllers');

/**
 * Auth
 */
routes.post('/signup', controllers.authController.signup);
routes.post('/signin', controllers.authController.signin);

/**
 * ==========================================================
 * Auth routes
 */

routes.use(authMiddleWare);
routes.get('/tweets', (req, res) => {
  console.log(req.userId);
  res.send('ok');
});

module.exports = routes;
