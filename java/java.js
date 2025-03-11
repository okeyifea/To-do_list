function addTask() {
    let taskInput = document.getElementById("textinput");
    let taskList = document.getElementById("tasklist");

    console.log('taskInput')
   
    if (taskInput.value.trim() === "") return;

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    console.log(taskInput.value)
}