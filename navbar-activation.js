/* const ulTags = document.getElementById("nav-container");
const listItems = ulTags.getElementsByTagName("li");




Array.from(listItems).forEach((item) => {
 
  item.addEventListener('click', () => {
    Array.from(listItems).forEach((li => li.classList.remove('btn', 'btn-primary')))
    item.classList.add('btn', 'btn-primary')
    item.classList.remove('bg-gray-100')
  })
})
 */
/* const ulTags = document.getElementById("nav-container");
const listItems = ulTags.getElementsByTagName("li");



let lastClicked = null;

for (const list of listItems) {
  list.addEventListener("click", function () {
    if (lastClicked === null) {
      list.style.backgroundColor = "red";
      list.style.color = "white";
      lastClicked = list;
    } else {
      lastClicked.style.backgroundColor = "white";
      lastClicked.style.color = "black";
      list.style.backgroundColor = "red";
      lastClicked = list;
    }
  });
}


 */

/* const ulTags = document.getElementById("nav-container");
const listItems = ulTags.getElementsByTagName("li");
let lastClicked = null;

for (const list of listItems) {
  list.addEventListener("click", () => {
    if (lastClicked) {
      lastClicked.className = `btn`;
    }

    list.className = `btn btn-success`;
    lastClicked = list;
  });
}
 */