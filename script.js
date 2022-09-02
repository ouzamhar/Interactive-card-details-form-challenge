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
const btn = document.querySelector(".confirm-btn");
const completed = document.querySelector(".completed");
const nameError = document.getElementById("name-error");

document.querySelector("form").reset();

function inputName() {
  if (nameInput.value.length === 1) {
    nameInput.value = nameInput.value.replace(/\s/, "");
  }
  nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, "");
  if (nameInput.value) {
    cardName.textContent = nameInput.value;
  } else {
    cardName.textContent = "Jane Appleseed";
  }
}

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("blur", function () {
    if (!input.validity.valid) {
      input.classList.add("error-input");
      if (input.value) {
        input.classList.add("wrong-format");
      } else {
        input.classList.add("empty-input");
      }
    }
  });
});

function inputNumber() {
  numberInput.classList.remove("wrong-format");
  numberInput.classList.remove("wrong-numbers");
  if (numberInput.value.length === 1) {
    numberInput.value = numberInput.value.replace(/\s/, "");
  }
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
  if (numberInput.value && !numberInput.validity.valid) {
    numberInput.classList.add("wrong-format");
  }
}

function getMonth() {
  monthInput.classList.remove("wrong-format");
  console.log(monthInput.value);
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
  cvcInput.classList.remove("empty-input");
  cvcInput.classList.remove("error-input");
  cvcInput.classList.remove("wrong-format");
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

btn.addEventListener("click", (e) => {
  e.preventDefault;
  val = true;
  for (elm of inputs) {
    val = val && elm.validity.valid;
    if (!elm.validity.valid) {
      elm.classList.add("error-input");
      if (elm.value) {
        elm.classList.add("wrong-format");
      } else {
        elm.classList.add("empty-input");
      }
    }
  }
  if (numberInput.value.length < 19) {
    val = false;
    numberInput.classList.add("wrong-numbers");
  }
  if (val) {
    document.querySelector("form").style.display = "none";
    completed.style.display = "flex";
  }
});
