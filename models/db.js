const mongoose = require('mongoose');

const schemas = new mongoose.Schema({
  title: { type: String, required: true },
  decription: { type: String},
  link: { type: String },
  prolink: { type: String },


});

module.exports = mongoose.model('sattaking', schemas);