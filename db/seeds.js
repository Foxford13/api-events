const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Event = require('../models/event');

Event.collection.drop();




const eventData = [{
  title: 'Awesome event',
  dateFrom: '2016-08-11',
  dateTo: '2016-08-11',
  location: 'Lodon',
  description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
},{
  title: 'Awesome event',
  dateFrom: '2016-08-11',
  dateTo: '2016-08-11',
  location: 'Lodon',
  description: 'lorem ipsumwqeqeqeqweqwelorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
},{
  title: 'Bday',
  dateFrom: '2016-08-11',
  dateTo: '2016-08-11',
  location: 'Neverland',
  description: 'lorem ipsumwqeqeqeqweqwelorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
},{
  title: 'Awesomesdadasdasd',
  dateFrom: '2016-08-11',
  dateTo: '2016-08-11',
  location: 'Warsaw',
  description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
}];

Event
.create(eventData)
.then(events => console.log(`${events.length} events creatd`))
.catch(err => console.log(err))
.finally(() => mongoose.connection.close());
