const Event = require('../models/event');

function eventIndex(req, res, next) {
  Event
  .find()
  .exec()
  .then((events) => res.json(events))
  .catch(next);
}

function eventCreate(req, res, next) {
  Event
  .create(req.body)
  .then((event) => res.status(201).json(event))
  .catch(next);
}

function eventShow(req, res, next) {
  Event
  .findById(req.params.id)
  .exec()
  .then(event => res.status(201).json(event))
  .catch(next);
}

////this update may cause trouble
function eventUpdate(req, res, next) {
  Event
  .findById(req.params.id)
  .exec()
  .then((event) => {
    for(const field in req.body) {
      event[field] = req.body[field];
    }
    return event.save();
  })
  .then((event) => res.json(event))
  .catch(next);
}

function eventDelete(req, res, next) {
  Event
  .findById(req.params.id)
  .exec()
  .then((event) => {
    if(!event) return res.notFound();
    return event.remove();
  })
  .then(() => res.status(204).end())
  .catch(next);
}




module.exports = {
  index: eventIndex,
  create: eventCreate,
  show: eventShow,
  update: eventUpdate,
  delete: eventDelete
};
