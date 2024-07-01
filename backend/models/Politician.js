// backend/models/Politician.js
const mongoose = require('mongoose');

const PoliticianSchema = new mongoose.Schema({
  name: { type: String, required: true },
  party: { type: String, required: true },
  state: { type: String, required: true },
  promises: [{ 
    title: String, 
    description: String, 
    status: String 
  }],
  votingRecords: [{
    bill_id: String,
    title: String,
    vote: String,
    date: Date
  }],
  publicStatements: [{
    content: String,
    date: Date
  }]
});

module.exports = mongoose.model('Politician', PoliticianSchema);
