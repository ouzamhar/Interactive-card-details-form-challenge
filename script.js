const nameInput = document.getElementById("input-name");
const cardName = document.querySelector(".card-owner");
const numberInput = document.getElementById("input-number");
const cardNumber = document.querySelector(".card-number");
const monthInput = document.getElementById("input-month");
const yearInput = document.getElementById("input-year");
const expMonth = document.querySelector(".month");
const expYear = document.querySelector(".year");
const cvcCard = document.querySelector(".cvc");
const cvcInput = document.getElementById("input-cvc");
const btn = document.querySelector(".btn");

function inputName() {
  if (nameInput.value && nameInput.validity.valid) {
    cardName.textContent = nameInput.value;
  } else {
    cardName.textContent = "Jane Appleseed";
  }
}

function inputNumber() {
  let numbers = numberInput.value.replace(/\D/g, "").match(/\d{1,4}/g);
  if (numbers && numberInput.validity.valid) {
    numberInput.value = numbers.join(" ");
    Array.from(cardNumber.children).forEach((span, index) => {
      if (numbers[index]) {
        span.textContent = numbers[index];
      } else {
        span.textContent = "";
      }
    });
  } else {
    Array.from(cardNumber.children).forEach((span) => {
      span.textContent = "0000";
    });
  }
}

// cvcInput.addEventListener("keyup", (event) => {
//   cvcCard.textContent = cvcInput.value.length ? cvcInput.value : "000";
// });
// monthInput.addEventListener("keyup", (event) => {
//   expMonth.textContent = monthInput.value.length ? monthInput.value : "00";
// });
// yearInput.addEventListener("keyup", (event) => {
//   expYear.textContent = yearInput.value.length ? yearInput.value : "00";
// });
