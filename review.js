// const textArea = document.getElementById("text-area");
// const reviewContainer = document.getElementById("review");
// let reviewCount = 1;
// document.getElementById("submit-btn").addEventListener("click", function () {
//   let textValue = textArea.value.trim();
//   if (!textValue) {
//     alert("Please enter a review.");
//   } else {
//     addReview(textValue);
//     addToLS();
//     textArea.value = "";
//   }
// });

// const addToLS = () => {
//   const reviews = [];
//   const reviewLists = reviewContainer.querySelectorAll("h3");
//   reviewLists.forEach((review) => {
//     reviews.push(review.textContent.split(". ")[1]);
//   });
//   localStorage.setItem("review", JSON.stringify(reviews));
// };

// const addReview = (review) => {
//   const div = document.createElement("div");
//   div.classList.add(
//     "flex",
//     "items-center",
//     "gap-4",
//     "justify-between",
//     "border-2",
//     "border-gray-200",
//     "rounded-lg",
//     "p-2"
//   );

//   div.innerHTML = `
//     <h3 class="font-medium">${reviewCount}. ${review}</h3>
//     <button onclick="removeRemove(event)" class="bg-red-500 text-white px-3 py-1 rounded-lg delete-btn">Delete</button>
//   `;
//   reviewContainer.appendChild(div);
//   reviewCount++;
// };

// /* 
//     tasks.push(item.textContent.replace("DELETE", "").trim());
// */

// const removeRemove = (e) => {
//   const target = e.target.parentNode;
//   e.target.parentNode.parentNode.removeChild(target);
//   updateCount();
//   addToLS()
// };

// const updateCount = () => {
//   reviewCount = 1;
//   const target = reviewContainer.querySelectorAll("h3");
//   target.forEach((review) => {
//     review.textContent = `${reviewCount++}. ${
//       review.textContent.split(". ")[1]
//     }`;
//   });
// };

// const loadData = () => {
//   const items = JSON.parse(localStorage.getItem("review"));
//   items.forEach((task) => {
//     addReview(task);
//   });
// };

// loadData();

/* document.getElementById("submit-btn").addEventListener("click", () => {
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
