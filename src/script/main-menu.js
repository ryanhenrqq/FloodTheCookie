document.addEventListener("DOMContentLoaded", function() {
    returnNormalTitle()
})
function start(){
    if (navigator.vibrate) {
        navigator.vibrate(50)
    }
    window.location.replace("./pg/ingame.html")  
}
function continueGm() {
    if (navigator.vibrate) {
        navigator.vibrate(500)
    }
    const alerter = document.getElementById("alert-title")
    alerter.textContent = "Não há jogo salvo!"
    alerter.style.color = "red"
    setTimeout(returnNormalTitle, 3000)
}
function returnNormalTitle() {
    const alerter = document.getElementById("alert-title")
    alerter.textContent = "FloodTheCookie"
    alerter.style.color = "black"
}