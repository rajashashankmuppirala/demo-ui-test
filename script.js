function fetchData(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function startLoop() {
  //replace urls with proper ones
  const url1 = '';
  const url2 = '';
  setInterval(fetchData(url1), 1000);
  setInterval(fetchData(url2), 2000);
}

// Start the loop with a 5-second interval (5000 milliseconds)
startLoop();
