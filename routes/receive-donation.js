const fs = require('fs');
const express = require('express');
const router = express.Router();
const data = JSON.parse(fs.readFileSync('./data/donationData.json', 'utf8'));

router.post('/receive-donation', async (req, res) => {
  console.log('====================Receiving Donation!====================');
  try {
    const donationAmt = req.body.donationAmt;
    let amtRecieved = data.amtRecieved;
    let numOfDonors = data.numOfDonors;
    amtRecieved = Math.abs(donationAmt + amtRecieved);
    numOfDonors = Math.abs(numOfDonors + 1);
    data.numOfDonors = numOfDonors;
    data.amtRecieved = amtRecieved;
    fs.writeFileSync('./data/donationData.json', JSON.stringify(data), 'utf8', (err) => {
      if (err) {
        throw err;
      }
      console.log('Saved File');
    });
    console.log(data);
    res.end();
  } catch (e) {
    res.send(e)
  }
});

module.exports = router;
