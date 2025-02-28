const allBtn = document.getElementsByClassName("add-btn");
for (const btn of allBtn) {
  btn.addEventListener("click", (e) => {
    const name = btn.parentNode.childNodes[1].innerText;
    const price = btn.parentNode.childNodes[3].childNodes[1].innerText;
    const category = btn.parentNode.childNodes[5].childNodes[1].innerText;

    e.target.disabled = true;

    const selectedPlayer = document.getElementById(
      "selected-players-container"
    );
    const div = document.createElement("div");
    div.classList.add("selected-players");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p.innerText = name;
    p2.innerText = price;
    p3.innerText = category;

    if (
      getConvertedValue("cart") + 1 > 6 ||
      getConvertedValue("left") - 1 < 0
    ) {
      alert("");
      return;
    }

    e.target.parentNode.style.backgroundColor = "gray";

    const budget = getConvertedValue("budget");
    setInnerTextByValue("budget", budget - parseInt(price));
    const cart = getConvertedValue("cart");
    setInnerTextByValue("cart", cart + 1);
    const left = getConvertedValue("left");
    setInnerTextByValue("left", left - 1);

    div.append(p, p2, p3);

    selectedPlayer.appendChild(div);

    updateTotalCost(parseInt(price));

    updateGrandTotal();
  });
}

const updateTotalCost = (price) => {
  const totalCost = getConvertedValue("total-cost");
  const sum = totalCost + price;
  setInnerTextByValue("total-cost", sum);
};

const updateGrandTotal = (status) => {
  const totalCost = getConvertedValue("total-cost");
  if (status) {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode.toLowerCase() === "love420") {
      document.getElementById("apply-btn").removeAttribute("disabled");
      const discount = totalCost * 0.2;
      const newGrand = totalCost - discount;
      setInnerTextByValue("grand-total", newGrand);
      document.getElementById("coupon-code").value = "";
    } else {
      console.log("Not");/*  */
    }
  } else {
    setInnerTextByValue("grand-total", totalCost);
  }
};

const setInnerTextByValue = (id, price) => {
  const getId = document.getElementById(id);
  getId.innerText = price;
};

const getConvertedValue = (id) => {
  const price = document.getElementById(id).innerText;
  const convertedPrice = parseInt(price);
  return convertedPrice;
};
