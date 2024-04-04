function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = taskText + '<span class="delete" onclick="removeTask(this)">X</span>';
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function removeTask(element) {
    var taskList = document.getElementById("taskList");
    var taskItem = element.parentNode;
    taskList.removeChild(taskItem);
}
