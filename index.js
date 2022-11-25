// Day and Night
var daynight = document.getElementById("daynight");
daynight.onclick = function () {
    document.body.classList.toggle("dark_mode");
    if (document.body.classList.contains("dark_mode")) {
        daynight.src = "images/sun.png"
        logo.src = "images/logowhite.png"
        // logodown.src = "images/logoclr.png"

    } else {
        daynight.src = "images/moon.png"
        logo.src = "images/logoclr.png"
        // logodown.src = "images/logowhite.png"
    }
}

// Day and Night
var daynights = document.getElementById("daynights");
daynights.onclick = function () {
    document.body.classList.toggle("dark_mode");
    if (document.body.classList.contains("dark_mode")) {
        daynights.src = "images/sun.png"
        logo.src = "images/logowhite.png"
        // logodown.src = "images/logoclr.png"

    } else {
        daynights.src = "images/moon.png"
        logo.src = "images/logoclr.png"
        // logodown.src = "images/logowhite.png"
    }
}