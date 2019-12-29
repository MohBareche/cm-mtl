const express = require('express')
const router = express.Router()
const Rental = require('../models/rental')

const UserCtrl = require('../controllers/user')

// get secret
router.get('/secret', UserCtrl.authMiddleware ,(req,res)=>{
  res.json({'secret':true})
})



// get all rentals
router.get('', (req, res) => {
  Rental.find({}, (err, foundRentals) => {
    res.json(foundRentals)
  })
})

// get rental by id
router.get('/:id', (req, res) => {
  const rentalId = req.params.id
  Rental.findById(rentalId, (err, foundRental) => {

    if (err) {
      res.status(422).send({
        errors: [{
          title: 'Rental Error!',
          detail: 'Could not find Rental!'
        }]
      })
    }
    res.json(foundRental)
  })
})




module.exports = router
