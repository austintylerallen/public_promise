// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/public_promise', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use routes
const politiciansRouter = require('./routes/politicians');
app.use('/api/politicians', politiciansRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
