const inputField = document.getElementById("input-value");
const contentContainer = document.getElementById("content-container");
let taskCount = 1;
document.getElementById("task-btn").addEventListener("click", () => {
  if (!inputField.value) {
    alert("");
  } else {
    const task = inputField.value;
    createTask(task);
    inputField.value = "";
    addToLS();
  }
});

const addToLS = () => {
  const tasks = [];
  const taskLists = contentContainer.querySelectorAll("tr");
  taskLists.forEach((task) => {
    tasks.push(task.querySelectorAll("td")[0].textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadItems = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach(createTask);
};

window.onload = loadItems;

const createTask = (task) => {
  const tr = document.createElement("tr");
  tr.classList.add("my-2");
  tr.innerHTML = `
  <th>${taskCount}</th>
  <td>${task}</td>
  <td onclick="deleteBtn(event)" class="btn btn-error">Delete</td>
  `;
  contentContainer.appendChild(tr);
  taskCount++;
};

const deleteBtn = (e) => {
  const target = e.target.parentNode;
  target.parentNode.removeChild(target);
  updateCount();
  addToLS();
};

const updateCount = () => {
  taskCount = 1;
  const rows = document
    .getElementById("content-container")
    .querySelectorAll("tr");
  rows.forEach((row) => {
    row.querySelector("th").innerText = taskCount++;
  });
};

document.getElementById("clear-btn").addEventListener("click", function () {
  contentContainer.innerHTML = "";
  taskCount = 1;
  addToLS();
});
