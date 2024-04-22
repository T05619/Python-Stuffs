let active

function play() {
    if (active === false) {
        active = true
        document.getElementById('sidebar').style.right = "0%";
    } else {
        active = false
        document.getElementById('sidebar').style.right = "-100%";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    active = false;
});