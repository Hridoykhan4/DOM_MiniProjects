/* let count = 1;

document.getElementById("submit-btn").addEventListener("click", function () {
  const textArea = document.getElementById("text-area").value;

  const reviewContainer = document.getElementById("review");
  const p = document.createElement("p");
  p.innerText = count + "." + textArea;
  count++;
  const reviewUpdated = reviewContainer.appendChild(p);
  // reviewUpdated.style.border = '1px solid black'
  reviewUpdated.style.fontWeight = "bold";
  reviewUpdated.style.marginTop = "1rem";

  document.getElementById("text-area").value = "";
});

// Key Board Event

document
  .getElementById("text-area")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const textArea = document.getElementById("text-area").value;
      const p = document.createElement("p");
      p.innerText = textArea;
      const reviewContainer = document.getElementById("review");
      reviewContainer.appendChild(p);
      document.getElementById("text-area").value = "";
    }
  });
 */