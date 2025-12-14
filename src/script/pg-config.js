const returner = document.getElementById("return-menu")
const continuing = document.getElementById("goon-game")

returner.addEventListener("click", returnToMain)
continuing.addEventListener("click", verifyInput)

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("username")){
        const nameInput = document.getElementById("username-hold")
        nameInput.value = localStorage.getItem("username")
    }
})

function returnToMain() {
    window.location.replace("../index.html")
}
function goOn() {
    window.location.replace("./ingame.html")
}
function returnNormalTitle() {
    const alerter = document.getElementById("alert-title")
    alerter.textContent = "Qual seu nome?"
    alerter.style.color = "black"
}
function verifyInput() {
    const nameInput = document.getElementById("username-hold")
    if (nameInput.value == "") {
        if (navigator.vibrate) {
            navigator.vibrate(700)
        }
        const alerter = document.getElementById("alert-title")
        alerter.textContent = "Campo do nome vazio"
        alerter.style.color = "red"
        setTimeout(returnNormalTitle, 3000)
        return
    } else {
        if (nameInput.value.length > 10) {
            if (navigator.vibrate) {
                navigator.vibrate(700)
            }
            const alerter = document.getElementById("alert-title")
            alerter.textContent = "Nome muito grande"
            alerter.style.color = "red"
            setTimeout(returnNormalTitle, 3000)
            return
        } else if (nameInput.value.length <= 2) {
            if (navigator.vibrate) {
                navigator.vibrate(700)
            }
            const alerter = document.getElementById("alert-title")
            alerter.textContent = "Nome muito pequeno"
            alerter.style.color = "red"
            setTimeout(returnNormalTitle, 3000)
            return
        } else {
            localStorage.setItem("username", nameInput.value)
            goOn()
        }
    }
}