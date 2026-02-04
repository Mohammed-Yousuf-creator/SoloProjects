const p1 = document.querySelector("#score-1 p")
const p2 = document.querySelector("#score-2 p")
let num1 = Number(p1.textContent)
let num2 = Number(p2.textContent)
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.currentTarget.parentNode.parentNode.id == p1.parentNode.parentNode.id) {
            num1 += Number(e.currentTarget.textContent)
            p1.textContent = num1
        }
        else if (e.currentTarget.parentNode.parentNode.id == p2.parentNode.parentNode.id) {
            num2 += Number(e.currentTarget.textContent)
            p2.textContent = num2
        }
    });
});
const btn = document.getElementById("clear-btn")
btn.addEventListener("click", clear)
function clear() {
    num1 = 0
    num2 = 0
    p1.textContent = 0
    p2.textContent = 0
}
