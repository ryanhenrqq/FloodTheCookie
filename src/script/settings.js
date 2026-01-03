// Settings Pages components
const fxBtn = document.getElementById("fx-sound-switch")
const lcCac = document.getElementById("clear-lc-cache")
const audChk = localStorage.getItem("is-audio-muted")

document.addEventListener("DOMContentLoaded", function() {
    // Verificação e correção do cache do som
    if (audChk == 0) {
        fxBtn.textContent = "Ativado"
    } else if (audChk == 1) {
        fxBtn.textContent = "Desativado"
    } else {
        localStorage.setItem("is-audio-muted", 0)
        fxBtn.textContent = "Ativado"
    }

    // verificação do cache do nome do usuario
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
    if (audChk == 0) {
        localStorage.setItem("is-audio-muted", 1)
        fxBtn.textContent = "Desativado"
    } else if (audChk == 1) {
        localStorage.setItem("is-audio-muted", 0)
        fxBtn.textContent = "Ativado"
    } else {
        localStorage.setItem("is-audio-muted", 0)
        fxBtn.textContent = "Ativado"
    }
    // criar uma variavel armazenada em cache para transferir as outras paginas
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