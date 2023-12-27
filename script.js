const increaseButtonEl = document.querySelector(".counter_button--increase");
const counterValueEl = document.querySelector(".counter_value");
const decreaseButtonEl = document.querySelector(".counter_button--decrease");
const resetButtonEl = document.querySelector(".counter_reset-button");
const counterHeadingEl = document.querySelector(".counter_heading");
const counterEl = document.querySelector(".counter");

function incrementCounter() {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  const newValue = currentValueAsNumber + 1;

  if (newValue > 5) {
    newValue = 5;
  }

  if (newValue >= 5) {
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  if (newValue >= 5) {
    counterEl.classList.add("counter--limit");
  }

  if (newValue >= 5) {
    counterHeadingEl.innerHTML = "<b>limit reached!</b>";
  } else if (newValue >= 0) {
    counterHeadingEl.textContent = "Fancy Counter";
  }
  counterValueEl.textContent = newValue;
  increaseButtonEl.blur();
}

increaseButtonEl.addEventListener("click", incrementCounter);
document.addEventListener("keydown", incrementCounter);

decreaseButtonEl.addEventListener("click", function () {
  let decValue = counterValueEl.textContent;
  let newDecValue = +decValue;
  let lessNum = newDecValue - 1;
  if (lessNum < 0) {
    lessNum = 0;
  }
  counterValueEl.textContent = lessNum;
  decreaseButtonEl.blur();
});

resetButtonEl.addEventListener("click", function () {
  counterValueEl.textContent = 0;
  counterEl.classList.remove("counter--limit");
  counterHeadingEl.textContent = "Fancy Counter";
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  resetButtonEl.blur();
});
