let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

// Update the time on the show
function updateTime() {
    elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);

    const minutes = String(time.getUTCMinutes()).padStart(2, "0");
    const seconds = String(time.getUTCSeconds()).padStart(2, "0");
    const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, "0");

    document.getElementById("show").textContent = `${minutes}:${seconds}:${milliseconds}`;
}

// Start the stopwatch
document.getElementById("start").addEventListener("click", function () {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);
        isRunning = true;
    }
});

// Pause the stopwatch
document.getElementById("pause").addEventListener("click", function () {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
});

// Reset the stopwatch
document.getElementById("reset").addEventListener("click", function () {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("show").textContent = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    isRunning = false;
});

// Track lap times
document.getElementById("lap").addEventListener("click", function () {
    if (isRunning) {
        const lapTime = document.getElementById("show").textContent;
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
    }
});
