document.addEventListener('DOMContentLoaded', () => {
  const dataDiv = document.querySelector('.js-dataGrab');
  let dataTotal = parseInt(dataDiv.dataset.total);
  let dataReceived = parseInt(dataDiv.dataset.received);
  let dueDate = parseInt(dataDiv.dataset.dueDate);
  let stillNeeded = Math.abs(dataTotal - dataReceived);
  document.querySelector('.js-amtLeft').innerHTML = `$${stillNeeded}`;
});
