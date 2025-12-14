document.addEventListener("DOMContentLoaded", function() {
    const usernameLocal = localStorage.getItem("username")
    const scoreLocal = localStorage.getItem("score")
    const timeLocal = localStorage.getItem("timer")
    const lastSessionDiv = document.getElementById("last-session-info")
    if (usernameLocal) {
        const welcSession = document.getElementById("welcome-session")
        const infoSession = document.getElementById("info-session")
        welcSession.textContent = `Bem vindo(a) de volta, ${usernameLocal}!`
        infoSession.textContent = `Seu ultimo jogo teve ${scoreLocal} cookies em ${timeLocal} segundos`
    } else {
        lastSessionDiv.style.display = "none"
    }
    returnNormalTitle()
})
function start(){
    if (navigator.vibrate) {
        navigator.vibrate(50)
    }
    window.location.replace("./pg/config.html")  
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