require('dotenv').config();
const sls = require('serverless-http'),
      exp = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      path = require('path'),
      ejs = require('ejs'),
      receiveDonation = require('./routes/receive-donation'),
      getDonationData = require('./routes/get-data'),
      index = require('./routes/index');

const app = exp();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(exp.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(exp.urlencoded({ extended: false }));
app.use(cors())
app.get('/status', (req, res) => {
  let date = new Date();
  date = JSON.stringify(date);
  res.send(`We are Live - ${date}`);
  res.end();
});

app.use(receiveDonation);
app.use(getDonationData);
app.use('/', index);

module.exports.handler = sls(app);
