const capitalAlphabets = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
]
let arrayUsedForGeneration 
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
const characters = [
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
    ":",";","<",">",".","?","/"
]

const length = 15

  
const span1 = document.getElementById("span1")
const span2 = document.getElementById("span2")
document.getElementById("password-btn").addEventListener("click", function() {
    arrayUsedForGeneration = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
    if (document.getElementById("number").checked) {
    arrayUsedForGeneration = [...arrayUsedForGeneration, ...numbers]
}
if (document.getElementById("special-characters").checked) {
    arrayUsedForGeneration = [...arrayUsedForGeneration, ...characters]
}
if (document.getElementById("Capital-letters").checked) {
    arrayUsedForGeneration = [...arrayUsedForGeneration, ...capitalAlphabets]
}

let password1 = ''
let password2 = ''
for (let i = 0; i < length; i++) {
    password1 += arrayUsedForGeneration[Math.floor(Math.random() * arrayUsedForGeneration.length)]
    password2 += arrayUsedForGeneration[Math.floor(Math.random() * arrayUsedForGeneration.length)]
}
    span1.textContent = password1
    span2.textContent = password2
})
