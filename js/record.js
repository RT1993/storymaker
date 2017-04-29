
// Create array of values
var numbers = ['1',"2","3"];
var numberOfDays = numbers.length - 1;
// Select DOM node
var headlineVar = document.querySelector(".headline-var");

// Set Initial Value
headlineVar.textContent = numbers[numberOfDays];

// create a function that will cycle through array and replace value of dom node using a setTimout

// Create Interval to control counter
var countingDown = setInterval(countDown, 1000);

function countDown() {
  numberOfDays--;
  if (numberOfDays < 0) {
    headlineVar.textContent = "ACTION";
    clearInterval(countingDown);
    newYear();
  } else {
    headlineVar.textContent = numbers[numberOfDays];
  }
}