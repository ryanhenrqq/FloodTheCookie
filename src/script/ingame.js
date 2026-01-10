const cookie = document.getElementById("cookie")
const pointsText = document.getElementById("pointsSpan")
const multInfoText = document.getElementById("multiplier-info")
const automultInfoText = document.getElementById("auto-multiplier-info")
const industriesCont = document.getElementById("industries-cont")
const rightHeadSpan = document.getElementById("all-right-span")

let points = 0
let multiplier = 1
let multiplierLvl = 1
let minimum1Points = 15
let greenWaitTimer = 0

let uptime = 0
let clickpersecs = 0
let gameSaved = false
let industrieUnlocked = false

function makePointsRed(milisecs) {
    increaseGreenWaiter(Number(milisecs) * 1.5)
    pointsText.style.color = "red"
    setTimeout(normalizePointColor, milisecs)
}
function makePointsGreen(milisecs) {
    if (greenWaitTimer != 0) {
        return
    }
    pointsText.style.color = "#72ee82"
    setTimeout(normalizePointColor, milisecs)
}
function normalizePointColor() {
    pointsText.style.color = "white"
}

document.addEventListener("DOMContentLoaded", function() {
    const multiplier1 = document.getElementById("price-mult1")
    const multiplier1btn = document.getElementById("mult1-btn0")
    const usernameCstEntry = document.getElementById("username-custom-entry")
    if (!localStorage.getItem("username")) {
        usernameCstEntry.textContent = "Padaria de Usuário"
    } else {
        usernameCstEntry.textContent = `Padaria de ${localStorage.getItem("username")}`
    }
    
    if (localStorage.getItem("continue-last-game")) {
        const welcomeMenu = document.getElementById("welcome-popup")
        welcomeMenu.style.display = "none"
        points = Number(localStorage.getItem("last-game-points"))
        multiplier = Number(localStorage.getItem("last-game-multiplier"))
        multiplierLvl = Number(localStorage.getItem("last-game-multiplierlvl"))
        minimum1Points = Number(localStorage.getItem("last-game-minimum1points"))
        uptime = Number(localStorage.getItem("last-game-uptime"))
        industrieUnlocked = false
        multiplier1.textContent = `Necessario ${minimum1Points} Cookies`
        multInfoText.textContent = `Nivel ${multiplierLvl}`
    } else {
        localStorage.setItem("last-game-points", 0)
        localStorage.setItem("last-game-multiplier", 0)
        localStorage.setItem("last-game-multiplierlvl", 0)
        localStorage.setItem("last-game-minimum1points", 30)
        localStorage.setItem("last-game-automultiplier", 0)
        localStorage.setItem("last-game-automultiplierlvl", 0)
        localStorage.setItem("last-game-minimumauto1points", 80)
        localStorage.setItem("last-game-uptime", 0)
        localStorage.setItem("last-game-unlockIndustry", false)
        multiplier1btn.disabled = true
        multiplier1.textContent = `Para começar, junte ${minimum1Points} Cookies`
    }
})

function uptimeSetter() {
    localStorage.setItem("last-game-uptime", uptime)
    const multiplier1 = document.getElementById("mult1-btn0")
    localStorage.setItem("timer", uptime)
    const elementTime = document.getElementById("uptime")
    uptime = uptime + 1
    let textShown = ""
    /* Some Precautions */
    if (points < 0) {
        localStorage.clear("continue-last-game")
        alert("Bug encontrado!")
        window.location.replace("../index.html")
    }
    if (points < minimum1Points && multiplier1.disabled == false) {
        /* Corrigir posteriormente */
        multiplier1.disabled = true
        console.log("multiplier.js: fixed button for multiplier (points lower than the minimum requirement)")
    }

    /* Final Function */
    if (uptime < 60) {
        textShown = `Jogando por ${uptime} Segundos`
        elementTime.textContent = textShown
    } else {
        textShown = `Jogando por ${Math.trunc(Number(uptime)/60)} Minutos`
        elementTime.textContent = textShown
    }
}
cookie.addEventListener("click", function(e){
    if (navigator.vibrate) {
        navigator.vibrate(50)
    }
    makePointsGreen(250)
    const multiplier1 = document.getElementById("mult1-btn0")
    const automatize1 = document.getElementById("auto1-btn0")
    localStorage.setItem("score", points)
    points = points + multiplier
    if (points < 10000) {
        pointsText.textContent = points
    } else if (points < 1000000) {
        pointsText.textContent = `${Math.trunc(Number(points) /Number(1000))} Mil`
    } else if (points < 1000000000) {
        if (points >= 1000000 && points < 2000000) {
            pointsText.textContent = `${(Number(points) /Number(1000000)).toFixed(1)} Milhão`
        } else if (points >= 2000000 && points < 10000000) {
            pointsText.textContent = `${(Number(points) /Number(1000000)).toFixed(1)} Milhões`
        } else {
            pointsText.textContent = `${Math.trunc(Number(points) /Number(1000000))} Milhões`
        }
    } else if (points < 1000000000000) {
        if (points >= 1000000000 && points < 2000000000) {
            pointsText.textContent = `${(Number(points) /Number(1000000000)).toFixed(1)} Bilhão`
        } else if (points >= 2000000000 && points < 10000000000) {
            pointsText.textContent = `${(Number(points) /Number(1000000000)).toFixed(1)} Bilhões`
        } else {
            pointsText.textContent = `${Math.trunc(Number(points) /Number(1000000000))} Bilhões`
        }
    } else if (points < 1000000000000000) {
        if (points >= 100000000000 && points < 2000000000000) {
            pointsText.textContent = `${(Number(points) /Number(1000000000000)).toFixed(1)} Trilhão`
        } else if (points >= 2000000000000 && points < 10000000000000) {
            pointsText.textContent = `${(Number(points) /Number(1000000000000)).toFixed(1)} Trilhões`
        } else {
            pointsText.textContent = `${Math.trunc(Number(points) /Number(1000000000000))} Trilhões`
        }
    }
    audioCracking()
    if (points >= minimum1Points) {
        multiplier1.disabled = false
    }
    if (points >= minimumAuto1Points) {
        automatize1.disabled = false
    }
})
function multiplier1() {
    if (navigator.vibrate) {
        navigator.vibrate(700)
    }
    audioHit()
    makePointsRed(250)
    const multiplier1 = document.getElementById("price-mult1")
    const multiplier1btn = document.getElementById("mult1-btn0")

    if (!gameSaved) {
        gameSaved = true
        localStorage.setItem("continue-last-game", true)
    }

    points = points - minimum1Points
    multiplier = multiplier + multiplier
    minimum1Points = Math.round(minimum1Points * 2.2)
    multiplierLvl = multiplierLvl + 1

    pointsText.textContent = points
    localStorage.setItem("last-game-multiplier", multiplier)
    localStorage.setItem("last-game-minimum1points", minimum1Points)
    localStorage.setItem("last-game-multiplierlvl", multiplierLvl)
    
    multiplier1btn.disabled = true
    multiplier1.textContent = `Necessario ${minimum1Points} Cookies`
    multInfoText.textContent = `Nivel ${multiplierLvl}`
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault()
})
document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
      e.preventDefault()
    }
}, { passive: false })

function checkIndustriesAvailable() {
    if (industrieUnlocked) {
        return
    } else {
        if (points < 300) {
            industriesCont.style.display = "none"
            industrieUnlocked = false
        } else if (points >= 300) {
            localStorage.setItem("last-game-unlockIndustry", true)
            industrieUnlocked = true
            industriesCont.style.display = "flex"
        }
    }
}

function EmptyGreenWaiter() {
    if (greenWaitTimer == 0) {
        return
    } else if (greenWaitTimer > 50) {
        greenWaitTimer = greenWaitTimer - 50
    } else {
        greenWaitTimer = 0
    }
}
function increaseGreenWaiter(milisecs) {
    greenWaitTimer = milisecs
}

setInterval(uptimeSetter, 1000)
setInterval(checkIndustriesAvailable, 1000)
setInterval(EmptyGreenWaiter, 50)