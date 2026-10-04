let face1 = document.getElementById("face1");
let face2 = document.getElementById("face2");
let face3 = document.getElementById("face3");
let nclick = 0;

function changeFace() {
    let roue = Math.floor(Math.random() * 3);
    face1.style.zIndex = roue === 0 ? "1" : "0";
    face2.style.zIndex = roue === 1 ? "1" : "0";
    face3.style.zIndex = roue === 2 ? "1" : "0";
}
function change2Face() {
    face1.style.display = "block";
    face2.style.display = "none";
    face3.style.display = "none";
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            face1.style.display = i === 0 ? "block" : "none";
            face2.style.display = i === 1 ? "block" : "none";
            face3.style.display = i === 2 ? "block" : "none";
            if (i === 2) {
                setTimeout(() => {
                    change2Face();
                }, 200);
            }
        }, i * 200);
    }
}
function change3Face() {
    face1.style.display = nclick === 0 ? "block" : "none";
    face2.style.display = nclick === 1 ? "block" : "none";
    face3.style.display = nclick === 2 ? "block" : "none";
}

// document.body.addEventListener("click", changeFace);
// changeFace();
// document.body.addEventListener("click", change2Face);
// change2Face();
onclick = () => {
    nclick++;
    if (nclick > 2) {
        nclick = 0;
    }
    change3Face();
}