const mongoose = require('mongoose')
const Schema = mongoose.Schema


const retalSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: [128, 'Trop long, maximum de 128 caractères']
  },
  city: {
    type: String,
    required: true,
    lowercase: true
  },
  street: {
    type: String,
    required: true,
    min: [4, 'Trop court, minimum de 4 caractères']
  },
  category: {
    type: String,
    required: true,
    lowercase: true
  },
  image: {
    type: String,
    required: true
  },
  bedrooms: Number,
  shared: Boolean,
  description: {
    type: String,
    required: true
  },
  dailyRate: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Rental', retalSchema)