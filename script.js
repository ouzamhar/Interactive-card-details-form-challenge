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

nameInput.addEventListener("input", (event) => {
  cardName.textContent = event.target.value;
  if (!cardName.textContent) {
    cardName.textContent = "Jane Appleseed";
  }
});
numberInput.addEventListener("keyup", (event) => {
  const len = numberInput.value.length;
  if (event.keyCode != 8) {
    if (len > 0 && numberInput.value.length % 5 === 0) {
      numberInput.value = [
        numberInput.value.slice(0, len - 1),
        numberInput.value.slice(len - 1),
      ].join(" ");
    }
  }
  const children = cardNumber.children;
  let j = 0;
  if (len > 0) {
    const array = numberInput.value.split(" ");
    console.log(array);

    let i = 0;
    while (array[i]) {
      children[j].textContent = array[i];
      i = i + 1;
      j = j + 1;
    }
    while (children[j]) {
      children[j].textContent = "";
      j = j + 1;
    }
  } else {
    while (children[j]) {
      children[j].textContent = "0000";
      j = j + 1;
    }
  }
});

cvcInput.addEventListener("keyup", (event) => {
  cvcCard.textContent = cvcInput.value.length ? cvcInput.value : "000";
});
monthInput.addEventListener("keyup", (event) => {
  expMonth.textContent = monthInput.value.length ? monthInput.value : "00";
});
yearInput.addEventListener("keyup", (event) => {
  expYear.textContent = yearInput.value.length ? yearInput.value : "00";
});
