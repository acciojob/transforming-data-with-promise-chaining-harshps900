// Selecting elements
const input = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Function to display result
function displayResult(result) {
  output.innerHTML = result;
}

// Function to create a delayed promise
function delayedPromise(result, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), delay);
  });
}

// Event listener for the button
button.onclick = function () {
  const initialValue = parseFloat(input.value);
  if (isNaN(initialValue)) {
    displayResult('Please enter a valid number.');
    return;
  }

  // Promise chain
  delayedPromise(initialValue, 2000)
    .then((result) => {
      displayResult(`Result: ${result}`);
      return delayedPromise(result * 2, 1000);
    })
    .then((result) => {
      displayResult(`Result: ${result}`);
      return delayedPromise(result - 3, 1000);
    })
    .then((result) => {
      displayResult(`Result: ${result}`);
      return delayedPromise(result / 2, 1000);
    })
    .then((result) => {
      displayResult(`Result: ${result}`);
      return delayedPromise(result + 10, 1000);
    })
    .then((finalResult) => {
      displayResult(`Final Result: ${finalResult}`);
    });
};

