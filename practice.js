const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", (e) => {
    count++;
    setInnerValue("cart-count", count);

    const placeName = e.target.parentNode.childNodes[1].innerText;

    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    const selectedPlace = document.getElementById("selected-place-container");

    const li = document.createElement("li");
    // li.classList.add('selected-place-container')

    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.marginBottom = "0.8rem";

    const p = document.createElement("p");
    p.innerText = placeName;

    const p2 = document.createElement("p");
    p2.innerText = price;

    li.append(p, p2);

    const budget = document.getElementById("budget");
    const convertedBudget = parseInt(budget.innerHTML);
    budget.innerText = convertedBudget - parseInt(price);

    selectedPlace.appendChild(li);

    totalCost("total-cost", parseInt(price));
    grandTotal(e);
  });
}

function totalCost(id, value) {
  const totalCost = parseInt(document.getElementById(id).innerText);
  const sum = totalCost + value;
  setInnerValue("total-cost", sum);
}

const grandTotal = (event, vehicle) => {
  const totalCost = document.getElementById("total-cost");
  const parseTotal = parseInt(totalCost.innerText);

  if (parseTotal === 0) {
    return;
  }

  if (vehicle === "bus") {
    setInnerValue("grand-total", parseTotal + 100);
  } else if (vehicle === "train") {
    setInnerValue("grand-total", parseTotal - 200);
  } else if (vehicle === "flight") {
    setInnerValue("grand-total", parseTotal + 200);
  } else {
    setInnerValue("grand-total", parseTotal);
  }

  event.target.disabled = true;
  event.target.style.backgroundColor = "yellow";
};

const setInnerValue = (id, value) => {
  document.getElementById(id).innerText = value;
};
