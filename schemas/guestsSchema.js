const mongoose = require('mongoose');
const connectDB = require('../connectDB');

const GuestsSchema = mongoose.Schema({
    firstName: {
      type: String,
      required: true
      },
    lastName: {
      type: String,
      required: true
      },
    status: {
      type: String,
      required: true
      },
    });
  
  const Guests = module.exports = mongoose.model('Guests', GuestsSchema);