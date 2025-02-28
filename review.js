/* const textArea = document.getElementById("text-area");
const reviewContainer = document.getElementById("review");
let reviewCount = 0;

document.getElementById("submit-btn").addEventListener("click", () => {
  let textValue = textArea.value.trim();
  if (!textValue) {
    alert("Please enter a review.");
  } else {
    addReview(textValue);
    textArea.value = "";
  }
});

const addReview = (review) => {
  reviewCount++;
  const div = document.createElement("div");
  div.classList.add(
    "flex",
    "items-center",
    "gap-4",
    "justify-between",
    "border-2",
    "border-gray-200",
    "rounded-lg",
    "p-2"
  );

  div.innerHTML = `
    <h3 class="font-medium">${reviewCount}. ${review}</h3>
    <button class="bg-red-500 text-white px-3 py-1 rounded-lg delete-btn">Delete</button>
  `;
  reviewContainer.appendChild(div);

  div.querySelector(".delete-btn").addEventListener("click", () => {
    div.remove();
    updateCount();
  });
};

const updateCount = () => {
  const reviews = reviewContainer.querySelectorAll("h3");
  reviewCount = 0;

  reviews.forEach((review) => {
    reviewCount = reviewCount + 1;
    review.textContent = `${reviewCount}. ${review.textContent.split(". ")[1]}`;
  });
};

document.getElementById("text-area").addEventListener("keyup", (e) => {
  const target = e.target.value;
  console.log(target);
  if (!target.trim()) {
    alert("");
    textArea.value = "";
    return;
  } else {
    if (e.key === "Enter") {
      addReview(target);
      textArea.value = "";
    }
  }
});
 */
