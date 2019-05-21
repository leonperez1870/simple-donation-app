document.addEventListener('DOMContentLoaded', () => {
  const dataDiv = document.querySelector('.js-dataGrab');
  let dataTotal = parseInt(dataDiv.dataset.total);
  let dataReceived = parseInt(dataDiv.dataset.received);
  let dueDate = dataDiv.dataset.dueDate;
  let stillNeeded = dataTotal - dataReceived;
  if (stillNeeded < 0) {
    document.querySelector('.js-amtLeft').innerHTML = `$0`;
  } else {
    document.querySelector('.js-amtLeft').innerHTML = `$${stillNeeded}`;
  }
  const oneDay = 24*60*60*1000;
  let firstDate = new Date();
  let secondDate = new Date(dueDate);
  firstDate = firstDate.getTime();
  secondDate = secondDate.getTime();
  let nDays = (secondDate - firstDate) / 1000 / 86400;
  nDays = Math.round(nDays - 0.5);
  if (nDays > 1) {
    document.querySelector('.js-daysLeft').innerHTML = `Only ${nDays} days left`;
  } else {
    document.querySelector('.js-daysLeft').innerHTML = `Only ${nDays} day left`;
  }

  function formSerialize(formElement) {
    const values = {};
    const inputs = formElement.elements;

    for (let i = 0; i < inputs.length; i++) {
      values[inputs[i].name] = inputs[i].value;
    }
    return values;
  }
  const form = document.querySelector('.js-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = formSerialize(document.querySelector('.js-form'));
    const obj = {donationAmt: 0};
    obj.donationAmt = parseInt(data.donationAmt);
    if (isNaN(obj.donationAmt)) {
      alert('Please enter amount');
      return false;
    }
    e.target.submit();
  });

  const url = window.location.href;
  if (url.indexOf('?') > -1) {
    let hasDonated = url.split('?')[1];
    // Show a popup here!
    console.log(hasDonated);
  }

  let percentTotal = Math.floor(dataReceived / dataTotal * 100);
  if (percentTotal > 90 && percentTotal < 100) {
    percentTotal = 90;
  } else {
    percentTotal = Math.ceil((percentTotal+1) / 10) * 10;
  }
  if (percentTotal > 100) {
    percentTotal = 100;
  }
  document.querySelector('.js-progBar').dataset.width = percentTotal;
});
