/* let taskCount = 1;

document.getElementById("task-btn").addEventListener("click", function () {
  const inputValue = document.getElementById("input-value").value;

  if (inputValue.trim() !== "") {
    const contentContainer = document.getElementById("content-container");

    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = taskCount++;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerText = inputValue;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-danger btn-xs";
    deleteBtn.addEventListener("click", function () {
      tr.remove();
      taskCount--;
    });
    td3.appendChild(deleteBtn);
    tr.appendChild(td3);

    contentContainer.appendChild(tr);

    document.getElementById("input-value").value = "";
  } else {
    alert("Please enter a task!");
  }
});

document.getElementById("clear-btn").addEventListener("click", function () {
  const contentContainer = document.getElementById("content-container");
  contentContainer.innerText = "";

  taskCount = 1;
});
 */
