// Calculate the user's weekly task goal.
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;

    let output = "User: " + userName + "<br>" +
                 "Total Weekly Goal: " + totalGoal;

    document.getElementById("goal-message").innerHTML = output;
}

// Run the calculation when the form button is clicked.
document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();

    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});

// Store all tasks as objects.
let tasks = [];

// Get Task Manager elements.
const taskListContainer = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskPriority = document.getElementById("task-priority");
const taskImportant = document.getElementById("task-important");
const deleteTasksButton = document.getElementById("delete-tasks");

// Create the task list dynamically.
const userTasks = document.createElement("ul");
userTasks.id = "user-tasks";
taskListContainer.appendChild(userTasks);

// Display a task on the page.
function displayTask(task) {
    const listItem = document.createElement("li");

    listItem.innerHTML =
        task.name + " - Priority: " + task.priority;

    // Style tasks based on priority.
    if (task.priority === "High") {
        listItem.style.fontWeight = "bold";
    } else if (task.priority === "Medium") {
        listItem.style.fontStyle = "italic";
    } else {
        listItem.style.opacity = "0.8";
    }

    // Important tasks must be red.
    if (task.isImportant) {
        listItem.style.color = "red";
    }

    // Mark task complete when clicked.
    listItem.addEventListener("click", function () {
        task.isCompleted = !task.isCompleted;

        if (task.isCompleted) {
            listItem.style.textDecoration = "line-through";
        } else {
            listItem.style.textDecoration = "none";
        }

        console.log(JSON.stringify(tasks));
    });

    userTasks.appendChild(listItem);
}

// Add a new task.
function addTask() {
    const taskName = taskNameInput.value.trim();

    if (taskName === "") {
        return;
    }

    const task = {
        id: tasks.length + 1,
        name: taskName,
        priority: taskPriority.value,
        isImportant: taskImportant.checked,
        isCompleted: false
    };

    tasks.push(task);
    displayTask(task);

    // Log the full task array.
    console.log(JSON.stringify(tasks));

    // Clear form controls.
    taskNameInput.value = "";
    taskPriority.value = "High";
    taskImportant.checked = false;
}

// Run Add Task when the form is submitted.
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
});

// Delete the entire task list.
function deleteTaskList() {
    tasks = [];
    userTasks.innerHTML = "";

    console.log(JSON.stringify(tasks));
}

deleteTasksButton.addEventListener("click", deleteTaskList);