const router = require('express').Router();
const eventsController = require('../controllers/events');


router.route('/events')
.get(eventsController.index)
.post(eventsController.create);







router.all('/*', (req, res) => res.notFound());

module.exports = router;
