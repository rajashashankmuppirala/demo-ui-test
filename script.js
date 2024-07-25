function fetchData() {
  fetch('')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function startLoop(interval) {
  setInterval(fetchData, interval);
}

// Start the loop with a 500 interval (500 milliseconds)
startLoop(500);
