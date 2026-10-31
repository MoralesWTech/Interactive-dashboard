function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    const timeString =
        hours + ":" + minutes + ":" + seconds + " " + session;

    const dateString = now.toLocaleDateString();

    document.getElementById("clock-face").innerHTML = timeString;
    document.getElementById("calendar-date").innerHTML = dateString;
}

updateClock();
setInterval(updateClock, 1000);