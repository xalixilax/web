

document.getElementById('methodSelect').onchange = function () {

    var select = document.getElementById('methodSelect');
    var thatvalue = select.options[select.selectedIndex].value;

    console.log(thatvalue);

    var elements = document.querySelectorAll('.active');
    elements.forEach(removeActive);

    var verticals = document.querySelectorAll('.m-any');
        verticals.forEach(setActive);

        if (thatvalue == "overlay") {
            var elements = document.querySelectorAll('.m-overlay');
            elements.forEach(setActive);
        }
        else if (thatvalue == "ctm_compact") {
            var elements = document.querySelectorAll('.m-ctm-compact');
            elements.forEach(setActive);
        }
        else if (thatvalue == "random") {
            var elements = document.querySelectorAll('.m-random');
            elements.forEach(setActive);
        }
        else if (thatvalue == "repeat") {
            var elements = document.querySelectorAll('.m-repeat');
            elements.forEach(setActive);
        }
};

function removeClass() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('active');
    }
}

function removeActive(item) {
    item.classList.remove('active');
}

function setActive(item) {
    item.classList.add('active');
}