document.addEventListener("DOMContentLoaded", function() {
    returnNormalTitle()
})
function start(){
    window.location.replace("./pg/ingame.html")  
}
function continueGm() {
    navigator.vibrate(200)
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