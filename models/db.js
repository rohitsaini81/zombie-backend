import mongoose from 'mongoose';

const schemas = new mongoose.Schema({
  name: { type: String },
  today: { type: String },
  yesterday: { type: String },

});

const Sattaking = mongoose.model('sattaking', schemas);

export default Sattaking;
