function clickSidenav() {
    let sidenav = document.getElementById("mySidenav");
    let sidebtn = document.getElementById("sidebtn");
    let content = document.getElementById("content");
    if (sidenav.style.width == "0px") {
        sidenav.style.width = "250px";
        sidebtn.style.marginLeft = "250px";
        sidebtn.style.tranform = "rotate(0deg)";
        content.style.marginLeft = "350px";
        sidenav.state = "opened";
    } else {
        sidenav.style.width = "0px";
        sidebtn.style.marginLeft = "0px";
        sidebtn.style.tranform = "rotate(180deg)";
        content.style.marginLeft = "0px";
        sidenav.state = "closed";
    }

}

window.onload = clickSidenav;
window.onload = checkSize;

function checkSize() {
    let sidenav = document.getElementById("mySidenav");
    let sidebtn = document.getElementById("sidebtn");
    let content = document.getElementById("content");
    // let preview = document.getElementsByClassName("preview");
    if (window.innerWidth <= 1230) {
        sidenav.style.width = "0px";
        content.style.marginLeft = "0px";
        sidebtn.style.display = "block";
        sidenav.state = "closed";

        // preview.style.width = "100%";
    } else {
        sidenav.style.width = "250px";
        content.style.marginLeft = "350px";
        sidebtn.style.display = "none";
        sidebtn.style.marginLeft = "0px";
        sidenav.state = "open";

        // preview.style.width = "20vw";
    }
}

window.onresize = checkSize;