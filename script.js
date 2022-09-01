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
  nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, "");
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

function getMonth() {
  monthInput.value = monthInput.value.replace(/[^0-9]/g, "");
  if (monthInput.value) {
    if (Number(monthInput.value[0]) > 1) {
      monthInput.value = "0" + monthInput.value;
    }

    if (Number(monthInput.value) > 12) {
      monthInput.value = monthInput.value.replace(/[2-9]/, "");
    }
    expMonth.textContent = monthInput.value;
  } else {
    expMonth.textContent = "00";
  }
}

monthInput.addEventListener("focusout", (event) => {
  if (monthInput.value === "00") {
    monthInput.value = "";
    expMonth.textContent = "00";
  }
  if (!monthInput.validity.valid) {
    expMonth.textContent = "00";
  }
});

function getYear() {
  yearInput.value = yearInput.value.replace(/[^0-9]/g, "");
  if (yearInput.value) {
    expYear.textContent = yearInput.value;
  } else {
    expYear.textContent = "00";
  }
}

yearInput.addEventListener("focusout", (event) => {
  if (!yearInput.validity.valid) {
    expYear.textContent = "00";
  }
});

function getCvc() {
  cvcInput.value = cvcInput.value.replace(/[^0-9]/g, "");
  if (cvcInput.value) {
    cvcCard.textContent = cvcInput.value;
  } else {
    cvcCard.textContent = "000";
  }
}

cvcInput.addEventListener("focusout", (event) => {
  if (!cvcInput.validity.valid) {
    cvcCard.textContent = "000";
  }
});
