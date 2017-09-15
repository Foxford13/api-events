const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({

  title: {type: String},
  dateFrom: {type: Date},
  dateTo: {type: Date},
  location: {type: String},
  description: {type: String}
});



module.exports= mongoose.model('Event', eventSchema);
