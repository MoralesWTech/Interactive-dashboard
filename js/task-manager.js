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

// Track the user's tasks.
let myTasks = [];

// Create the unordered list dynamically.
const taskListContainer = document.getElementById("task-list");
const userTasks = document.createElement("ul");

userTasks.id = "user-tasks";
taskListContainer.appendChild(userTasks);

// Add a task when the Add Task button is clicked.
document.getElementById("add-task").addEventListener("click", function () {
    const taskName = document.getElementById("task-name").value;

    if (taskName.trim() !== "") {
        myTasks.push(taskName);

        const listItem = document.createElement("li");
        listItem.innerHTML = taskName;

        userTasks.appendChild(listItem);

        document.getElementById("task-name").value = "";
    }
});