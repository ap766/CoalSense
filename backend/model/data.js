const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
  RFID: {
    type: String,
    required: true
  },
  freight_type: {
    type: String,
    required: true
  },
  fault:{
    type: String,
    default: 'No'
  }}
, { timestamps: true })


module.exports = mongoose.model('Data', dataSchema)