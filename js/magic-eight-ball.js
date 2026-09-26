// Possible Magic Eight Ball responses
const answers = [
    "Yes, definitely.",
    "It is certain.",
    "Without a doubt.",
    "Ask again later.",
    "Cannot predict now.",
    "Don't count on it.",
    "My reply is no.",
    "Very doubtful."
];

// Get page elements
const question = document.getElementById("question");
const ball = document.getElementById("ball");
const circle = document.getElementById("circle");
const reset = document.getElementById("reset");

// Select and display a random answer
function displayAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);

    circle.style.display = "flex";
    circle.innerHTML = answers[randomIndex];
}

// Respond when the user clicks the Eight Ball
ball.addEventListener("mousedown", function () {
    if (question.value.trim() === "") {
        alert("Please enter a yes/no question.");
    } else {
        displayAnswer();
    }
});

// Hide the answer when the reset button is clicked
reset.addEventListener("click", function () {
    circle.style.display = "none";
});

