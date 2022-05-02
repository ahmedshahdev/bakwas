let before = document.getElementById("before");
let input = document.getElementById("input");
let save = document.getElementById("save");
let after = document.getElementById("after");
let output = document.getElementById("output");
let clear = document.getElementById("clear");

function handleDisplay() {
    let ls = localStorage.getItem("name");
    if (ls === null) {
        after.style.display = "none";
        before.style.display = "block";
    } else {
        before.style.display = "none";
        after.style.display = "block";
        output.innerHTML = ls;
    }
}
handleDisplay()


function handleSave() {
    localStorage.setItem("name", input.value);
    handleDisplay()
}

function handleClear() {
    localStorage.clear();
    handleDisplay()
}