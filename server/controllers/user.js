const User = require('../models/user')

exports.auth = function (req, res) {

}

exports.register = function (req, res) {
  const {
    username,
    email,
    password,
    confirmPassword
  } = req.body

  if (!username || !email) {
    return res.status(422).send({
      errors: [{
        title: 'Data missing!',
        detail: 'Provide email and password !'
      }]
    })
  }
  if (password !== confirmPassword) {
    return res.status(422).send({
      errors: [{
        title: 'Invalid password!',
        detail: 'Password is not a same as confirmation!'
      }]
    })
  }

  User.findOne({
    email
  }, (err, existingUser) => {
    if (err) {
      return res.status(422).send({
        'mongoose': 'next lecture'
      })
    }
    if (existingUser) {
      return res.status(422).send({
        errors: [{
          title: 'Invalid email!',
          detail: 'User with this email already exist!'
        }]
      })
    }

    const user = new User({
      username,
      email,
      password
    })

    user.save((err)=>{
      if(err) {
        return res.status(422).send({'mongoose': 'next lecture'})
      }
      return res.json({'registered':true})
    })

  })

}
