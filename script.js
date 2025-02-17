/* const count = document.getElementById("count");
const increaseBtn = document.getElementsByClassName("increase-button")[0];
const decreaseBtn = document.getElementsByClassName("decrease-button")[0];
const counter = document.getElementById("counter");

counter.addEventListener("click", () => {
  if (!decreaseBtn.getAttribute("disabled")) {
    counter.classList.add("bg-red-600", "text-white");
    increaseBtn.setAttribute("disabled", true);
    decreaseBtn.setAttribute("disabled", true);
  } else {
    counter.classList.remove("bg-red-600", "text-white");
    increaseBtn.removeAttribute("disabled", true);
    decreaseBtn.removeAttribute("disabled", true);
  }
});

let countStart = 0;

const updateCount = (value) => {
  countStart += value;

  count.innerText = countStart;

  if (countStart >= 10) {
    increaseBtn.setAttribute("disabled", true);
    increaseBtn.classList.add("cursor-not-allowed");
  } else {
    increaseBtn.removeAttribute("disabled", true);
    increaseBtn.classList.remove("cursor-not-allowed");
  }

  if (countStart <= 0) {
    decreaseBtn.setAttribute("disabled", true);
    decreaseBtn.classList.add("cursor-not-allowed");
  } else {
    decreaseBtn.removeAttribute("disabled", true);
    decreaseBtn.classList.remove("cursor-not-allowed");
  }
};

increaseBtn.addEventListener("click", (e) => {
  updateCount(1);
  e.stopPropagation();
});
decreaseBtn.addEventListener("click", (e) => {
  updateCount(-1);
  e.stopPropagation();
});
 */