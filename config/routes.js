const router = require('express').Router();
const eventsController = require('../controllers/events');


router.route('/events')
.get(eventsController.index)
.post(eventsController.create);

router.route('/events/:id')
.get(eventsController.show)
.put(eventsController.update)
.delete(eventsController.delete);







router.all('/*', (req, res) => res.notFound());

module.exports = router;
