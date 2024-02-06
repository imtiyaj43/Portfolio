/*Html slider*/
let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
  if (counter == 85) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 30);

/*javascript*/
let num_3 = document.getElementById("number2");
let counter3 = 0; // Use a different variable name here
setInterval(() => {
  if (counter3 == 60) {
    clearInterval();
  } else {
    counter3 += 1; // Increment the different counter variable
    num_3.innerHTML = counter3 + "%"; // Update the different element
  }
}, 30);

/*python slider*/
let num_4 = document.getElementById("number3");
let counter4 = 0; // Use a different variable name here
setInterval(() => {
  if (counter4 == 80) {
    clearInterval();
  } else {
    counter4 += 1; // Increment the different counter variable
    num_4.innerHTML = counter4 + "%"; // Update the different element
  }
}, 30);

/*C program*/
let num_5 = document.getElementById("number4");
let counter5 = 0; // Use a different variable name here
setInterval(() => {
  if (counter5 == 75) {
    clearInterval();
  } else {
    counter5 += 1; // Increment the different counter variable
    num_5.innerHTML = counter5 + "%"; // Update the different element
  }
}, 30);
