/* // Important Counter App PH

const count = document.getElementById("count");

const increaseBtn = document.getElementsByClassName("increase-button")[0];
const decreaseBtn = document.getElementsByClassName("decrease-button")[0];
const counter = document.getElementById("counter");

counter.addEventListener("click", function () {
  if (decreaseBtn.getAttribute("disabled") === null) {
    counter.classList.add("bg-red-600");
    counter.classList.add("text-white");
    increaseBtn.setAttribute("disabled", true);
    decreaseBtn.setAttribute("disabled", true);
  } else {
    counter.classList.remove("bg-red-600");
    counter.classList.remove("text-white");
    increaseBtn.removeAttribute("disabled");
    decreaseBtn.removeAttribute("disabled");
  }
});
increaseBtn.addEventListener("click", function (e) {
  let currentCount = Number(count.innerText);
  currentCount++;
  count.innerText = currentCount;
  e.stopPropagation();
});
decreaseBtn.addEventListener("click", function (e) {
  let currentCount = Number(count.innerText);
  currentCount--;
  count.innerText = currentCount;
  e.stopPropagation();
});
 */