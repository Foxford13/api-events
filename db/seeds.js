const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
const User = require('../models/user');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Event = require('../models/event');

Event.collection.drop();
User.collection.drop();



User
.create([{
  username: 'q',
  email: 'q',
  password: 'q',
  passwordConfirmation: 'q'
}])
.then((users) => {
  console.log(`${users.length} users created`);
  return Event
  .create([{
    title: 'Awesome event',
    dateFrom: '2016-08-11',
    dateTo: '2016-03-12',
    location: 'Lodon',
    description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    createdBy: users[0]
  },{
    title: 'Stock Broker Conference',
    dateFrom: '2013-08-11',
    dateTo: '2026-08-16',
    location: 'London',
    description: 'lorem ipsumwqeqeqeqweqwelorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    createdBy: users[0]
  },{
    title: 'Tech meetup',
    dateFrom: '2016-09-11',
    dateTo: '2019-08-19',
    location: 'Neverland',
    description: 'lorem ipsumwqeqeqeqweqwelorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    createdBy: users[0]
  },{
    title: 'Awesomesdadasdasd',
    dateFrom: '2016-04-11',
    dateTo: '2017-08-14',
    location: 'Warsaw',
    description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    createdBy: users[0]
  }])
  .then((events) => {
    console.log(`${events.length} events created`);
  });
})


.catch(err => console.log(err))
.finally(() => mongoose.connection.close());
