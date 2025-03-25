const mongoose = require('mongoose');

// Your MongoDB connection string
const dbURI = 'mongodb://localhost:27017/';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Connection error', error));