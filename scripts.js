console.log("connected.");

const pTag = document.getElementById("first");

console.log(pTag.innerHTML);

function changeText() {
    const pTag = document.getElementById("first");

    pTag.innerText = "This is cooler";
}