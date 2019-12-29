const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: 'Nom utilisateur requis',
    min: [4, 'Trop court, minimum de 4 caractères'],
    max: [32, 'Trop long, maximum de 32 caractères']
  },
  email: {
    type: String,
    min: [4, 'Trop court, minimum de 4 caractères'],
    max: [32, 'Trop long, maximum de 32 caractères'],
    unique: true,
    lowercase: true,
    required: 'Courriel requis',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  password: {
    type: String,
    min: [4, 'Trop court, minimum de 4 caractères'],
    max: [32, 'Trop long, maximum de 32 caractères'],
    required: 'Mot de passe requis'
  },
  rentals: [{
    type: Schema.Types.ObjectId,
    ref: 'Rental'
  }],
  avatar: {
    type: String
  }
}, {
  timestamps: true
})

userSchema.methods.hasSamePassword = function (requestedPassword) {
  return bcrypt.compareSync(requestedPassword, this.password)
}

userSchema.pre('save', function(next) {
  const user = this

  bcrypt.genSalt(10, (err, salt)=>{
    bcrypt.hash(user.password, salt, (err, hash)=>{
      user.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('User', userSchema)
