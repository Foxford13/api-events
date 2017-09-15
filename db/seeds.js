const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Event = require('../models/event');

Event.collection.drop();




const eventData = [{
  title: 'Awesome event',
  dateFrom: 10/10/2010,
  dateTo: 13/10/2010,
  location: 'Lodon',
  description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
},{
  title: 'Awesome event',
  dateFrom: 10/12/2010,
  dateTo: 12/12/2018,
  location: 'Lodon',
  description: 'lorem ipsumwqeqeqeqweqwelorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
},{
  title: 'Awesomesdadasdasd',
  dateFrom: 12/10/2010,
  dateTo: 13/12/2010,
  location: 'Warsaw',
  description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
}];

Event
.create(eventData)
.then(events => console.log(`${events.length} events creatd`))
.catch(err => console.log(err))
.finally(() => mongoose.connection.close());
