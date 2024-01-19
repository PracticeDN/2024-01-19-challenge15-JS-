const raffleButtonEl = document.getElementById("raffle");
const againButtonEl = document.getElementById("again");
const numberListEl = document.getElementById("number-list");

raffleButtonEl.addEventListener("click", () => {
  numberListEl.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 99) + 1;
    const number = document.createElement("p");
    number.textContent = `${randomNumber}`;
    numberListEl.append(number);
  }
});

againButtonEl.addEventListener("click", () => {
  numberListEl.innerHTML = "";
});
