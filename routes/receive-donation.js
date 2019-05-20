const fs = require('fs');
const express = require('express');
const router = express.Router();
const data = JSON.parse(fs.readFileSync('./data/donationData.json', 'utf8'));

router.post('/receive-donation', async (req, res) => {
  console.log('====================Receiving Donation!====================');
  const donationAmt = parseInt(req.body.donationAmt);
  let amtRecieved = parseInt(data.amtRecieved);
  let numOfDonors = data.numOfDonors;
  let hasDonated = false;
  amtRecieved = Math.abs(donationAmt + amtRecieved);
  numOfDonors = Math.abs(numOfDonors + 1);
  data.numOfDonors = numOfDonors;
  data.amtRecieved = amtRecieved;
  fs.writeFile('./data/donationData.json', JSON.stringify(data), 'utf8', (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Saved File');
  });
  hasDonated = true;
  res.redirect(303, `/?hasDonated=${hasDonated}`);
  res.end();
});

module.exports = router;
