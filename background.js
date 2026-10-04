let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");

function changeBackground() {
    b1.style.display = "block";
    b2.style.display = "none";
    b3.style.display = "none";
    b4.style.display = "none";
    b5.style.display = "none";
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            b1.style.display = i === 0 ? "block" : "none";
            b2.style.display = i === 1 ? "block" : "none";
            b3.style.display = i === 2 ? "block" : "none";
            b4.style.display = i === 3 ? "block" : "none";
            b5.style.display = i === 4 ? "block" : "none";
            if (i === 4) {
                setTimeout(() => {
                    changeBackground();
                }, 50);
            }
        }, i * 50);
    }
}

changeBackground();