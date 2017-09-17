const router           = require('express').Router();
const eventsController = require('../controllers/events');
const auth             = require('../controllers/auth');
const secureRoute      = require('../lib/secureRoute');

router.route('/events')
  .get(eventsController.index)
  .post(secureRoute, eventsController.create);

router.route('/events/:id')
  .get(eventsController.show)
  .put(secureRoute, eventsController.update)
  .delete(secureRoute, eventsController.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);



router.all('/*', (req, res) => res.notFound());

module.exports = router;
