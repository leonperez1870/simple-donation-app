const express = require('express');
const router = express.Router();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/donationData.json', 'utf8'));

router.get('/', (req, res) => {
  res.render('index.html', data);
})

module.exports = router;
