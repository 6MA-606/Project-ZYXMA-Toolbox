function load() {
    let btn = document.getElementById('btn2');
    let p = document.getElementById('p2');
    let i = 1;
    btn.addEventListener('click', () => {
        if (i == 1) {
            p.style.display = "none";
            i = 0;
        } else {
            p.style = "";
            i = 1;
        }
    });

} window.onload = load;