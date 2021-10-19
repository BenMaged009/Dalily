document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};

function dropfunc() {
    document.getElementById("myDropdown").classList.toggle("show");
};

function dropfunc2() {
    document.getElementById("myDropdown2").classList.toggle("show");
};

function dropfunc3() {
    document.getElementById("myDropdown3").classList.toggle("show");
};

function dropfunc4() {
    document.getElementById("myDropdown4").classList.toggle("show");
};

function dropfunc5() {
    document.getElementById("myDropdown5").classList.toggle("show");
};

function dropfunc6() {
    document.getElementById("myDropdown6").classList.toggle("show");
};
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}