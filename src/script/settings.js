// Settings Pages components
const fxBtn = document.getElementById("fx-sound-switch")
const lcCac = document.getElementById("clear-lc-cache")

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("username")){
        const nameInput = document.getElementById("username-hold")
        nameInput.value = localStorage.getItem("username")
        nameInput.disabled = "true"
    } else {
        // adicionar logica para a primeira visita
        nameInput.disabled = "true"
    }
})

fxBtn.addEventListener("click", function() {
    // criar uma variavel armazenada em cache para transferir as outras paginas
    const alerter = document.getElementById("alert-title-settings")
    alerter.textContent = "Em desenvolvimento"
    alerter.style.color = "red"
    setTimeout(returnNormalTitleFrSettings, 3000)
})

lcCac.addEventListener("click", function() {
    // logica simples,adicionar um clear pro local storage
    const alerter = document.getElementById("alert-title-settings")
    alerter.textContent = "Em desenvolvimento"
    alerter.style.color = "red"
    setTimeout(returnNormalTitleFrSettings, 3000)
})

function returnToMainMenu() {
    audioCracking()
    if (navigator.vibrate) {
        navigator.vibrate(50)
    }
    window.location.replace("../index.html")
}

function returnNormalTitleFrSettings() {
    const alerter = document.getElementById("alert-title-settings")
    alerter.textContent = "Configurações"
    alerter.style.color = "black"
}