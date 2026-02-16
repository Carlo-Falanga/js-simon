// Dom elements
const countDownEl = document.getElementById("countdown");
const numberListEl = document.getElementById("numbers-list");
const answersFormEl = document.getElementById("answers-form");
const buttonPrimaryEl = document.querySelector(".btn-primary");
const messageEl = document.getElementById("message");
const inputGroupEl = document.getElementById("input-group");

// random rumber generator function
function getRandomNum() {
  return Math.floor(Math.random() * 50) + 1;
}

// empty array
const secretNumbers = [];

// while cicle for pushing max 5 numbers into the array
while (secretNumbers.length < 5) {
  const num = getRandomNum();
  // IF the number in not already present, push it into the array
  if (!secretNumbers.includes(num)) {
    secretNumbers.push(num);
  }
}

// for cicle to display the lists of numbers in the document
for (let i = 0; i < secretNumbers.length; i++) {
  numberListEl.innerHTML += `<li>${secretNumbers[i]}</li>`;
}

// variable for time
let time = 30;
countDownEl.textContent = time;

// setInterval function for the coutdown
const timer = setInterval(function () {
  time--;
  countDownEl.textContent = time;
  if (time === 0) {
    clearInterval(timer);
    countDownEl.classList.add("d-none");
    numberListEl.classList.add("d-none");
    answersFormEl.classList.remove("d-none");
  }
}, 1000);

// addEventListener function for the inputs
answersFormEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputs = answersFormEl.querySelectorAll("input");

  const userNumbers = [];

  for (let i = 0; i < inputs.length; i++) {
    const value = Number(inputs[i].value);
    userNumbers.push(value);
  }

  const guessed = [];

  for (let i = 0; i < userNumbers.length; i++) {
    const userNumber = userNumbers[i];
    if (secretNumbers.includes(userNumber)) {
      guessed.push(userNumber);
    }
  }

  if (guessed.length > 0) {
    messageEl.textContent = `Hai indovinato ${guessed.length} numeri: ${guessed.join(", ")}`;
  } else {
    messageEl.textContent = `Non hai indovinato nessun numero`;
  }
});
