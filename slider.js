let face1 = document.getElementById("face1");
let face2 = document.getElementById("face2");
let face3 = document.getElementById("face3");

function changeFace() {
    let roue = Math.floor(Math.random() * 3);
    face1.style.zIndex = roue === 0 ? "1" : "0";
    face2.style.zIndex = roue === 1 ? "1" : "0";
    face3.style.zIndex = roue === 2 ? "1" : "0";
}

document.body.addEventListener("click", changeFace);
changeFace();
