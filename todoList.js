/* let taskCount = 1;
const inputField = document.getElementById("input-value");
const contentContainer = document.getElementById("content-container");

document.getElementById("task-btn").addEventListener("click", () => {
  if (!inputField.value.trim()) {
    alert("Provide Something");
  } else {
    const task = inputField.value;
    createTask(task);
    inputField.value = '';
  }
});

const saveToLS = () => {

}

const createTask = (task) => {
  const tr = document.createElement("tr");
  tr.className = `my-2`
  tr.innerHTML = `
      <th>${taskCount}</th>
      <td>${task}</td>
      <td onclick="deleteBtn(this)" class="btn"><button>Delete</button></td>
    `;
    contentContainer.appendChild(tr);
    saveToLS()
    taskCount++;
};

const deleteBtn = (event) => {
 event.parentNode.remove();
 updateNumber()
}


const updateNumber = () => {
  taskCount = 1;
  const rows = contentContainer.getElementsByTagName('tr');
  const arrRows = Array.from(rows);
  arrRows.forEach((row) => {
    row.getElementsByTagName('th')[0].innerText = taskCount++
  })
}

document.getElementById('clear-btn').addEventListener('click', () => {
  contentContainer.innerHTML = '';
  taskCount = 1
}) */