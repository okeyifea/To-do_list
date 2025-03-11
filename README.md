# To-Do List App

## 📌 Project Overview
This is a simple **To-Do List App** built using **HTML, CSS, and JavaScript**. The app allows users to add, delete, and manage tasks efficiently.

## 🎯 Features
✅ Add new tasks
✅ Delete tasks
✅ Prevent adding empty tasks
✅ Simple and modern UI
✅ Responsive design for mobile & desktop

## 🛠️ Technologies Used
- **HTML**: Structure of the web page
- **CSS**: Styling and layout
- **JavaScript**: Functionality (Adding and removing tasks)

## 🚀 How to Use
1. Enter a task in the input field.
2. Click the **ADD** button to add the task.
3. Click the ❌ button next to a task to remove it.

## 📂 Project Structure
```
📂 To-Do List Project
├── 📄 index.html  (Main structure)
├── 📄 style.css   (Styling the app)
├── 📄 script.js   (JavaScript logic)
```

## 📝 Code Snippets
### JavaScript Code for Adding Tasks
```js
function addTask() {
    let taskInput = document.getElementById("text-input");
    let taskList = document.getElementById("task-list");

    if (taskInput.value.trim() === "") return;

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}
```

## 📌 Future Improvements
- Add local storage support to save tasks.
- Implement an **edit** feature for tasks.
- Add a **task completion** feature.

## 💡 Author
Created by **okey ifeanyi**

## 📜 License
This project is **open-source**. Feel free to use and modify it! 🎉

