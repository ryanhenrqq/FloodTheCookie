// Settings Pages components
const fxBtn = document.getElementById("fx-sound-switch")
const volCtrl = document.getElementById("volume-ctrl-config")
const lcCac = document.getElementById("clear-lc-cache")
let audChk = localStorage.getItem("is-audio-muted")

document.addEventListener("DOMContentLoaded", function() {
    // Verificação e correção do cache do som
    if (audChk == 0) {
        volCtrl.src = "../src/res/ico/volume-on.svg"
    } else if (audChk == 1) {
        volCtrl.src = "../src/res/ico/volume-off.svg"
    } else if (audChk == 2) {
        localStorage.setItem("is-audio-muted", 0)
        volCtrl.src = "../src/res/ico/volume-on.svg"
        audChk = 0
    } else {
        localStorage.setItem("is-audio-muted", 0)
        volCtrl.src = "../src/res/ico/volume-on.svg"
    }

    const usernameLocal = localStorage.getItem("username")
    if (usernameLocal) {
        lcCac.disabled = false
    } else {
        lcCac.disabled = true
    }

    // verificação do cache do nome do usuario
    if (localStorage.getItem("username")){
        const nameInput = document.getElementById("username-hold")
        nameInput.value = localStorage.getItem("username")
        nameInput.disabled = "true"
    } else {
        const nameInput = document.getElementById("username-hold")
        // adicionar logica para a primeira visita
        nameInput.disabled = "true"
        nameInput.value = "Start a new game before..."
    }
})

fxBtn.addEventListener("click", function() {
    if (audChk == 0) {
        audChk = 1
        localStorage.setItem("is-audio-muted", 1)
        volCtrl.src = "../src/res/ico/volume-off.svg"
    } else if (audChk == 1) {
        audChk = 0
        localStorage.setItem("is-audio-muted", 0)
        audioCracking()
        volCtrl.src = "../src/res/ico/volume-on.svg"
    } else {
        audChk = 0
        localStorage.setItem("is-audio-muted", 0)
        audioCracking()
        volCtrl.src = "../src/res/ico/volume-on.svg"
    }
    // criar uma variavel armazenada em cache para transferir as outras paginas
})

lcCac.addEventListener("click", function() {
    const usernameLocal = localStorage.getItem("username")
    if (usernameLocal) {
        // logica simples,adicionar um clear pro local storage
        const alerter = document.getElementById("alert-title-settings")
        alerter.textContent = "Erasing..."
        alerter.style.color = "red"

        audioCracking()
        localStorage.clear()
        setTimeout(() => {
            location.reload(true)
        }, 1000);
        
    } else {
        // logica simples,adicionar um clear pro local storage
        const alerter = document.getElementById("alert-title-settings")
        alerter.textContent = "There is no game saved"
        alerter.style.color = "red"
    }

    
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
    alerter.textContent = "Settings"
    alerter.style.color = "black"
}