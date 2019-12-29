const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake-db')
const port = process.env.PORT ||3000

const rentalRoutes = require('./routes/rentals'),
      userRoutes = require('./routes/users')

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended:true}))

// connection to database
mongoose.connect(config.DB_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false
}).then(()=>{
  const fakeDb = new FakeDb()
  fakeDb.seedDb()
})

// routes
app.use('/api/v1/rentals', rentalRoutes)
app.use('/api/v1/users', userRoutes)

// server start
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});