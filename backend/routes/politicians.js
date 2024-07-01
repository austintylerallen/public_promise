// backend/routes/politicians.js
const express = require('express');
const router = express.Router();
const Politician = require('../models/Politician');

// Get all politicians
router.get('/', async (req, res) => {
  try {
    const politicians = await Politician.find();
    res.json(politicians);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
