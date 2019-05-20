const express = require('express');
const router = express.Router();
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./data/donationData.json', 'utf8'));

router.get('/data', async (req, res) => {
  res.send(data);
});

module.exports = router;
