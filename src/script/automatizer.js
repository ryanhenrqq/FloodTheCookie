let autoMultiplier = 0
let autoMultiplierLvl = 0
let minimumAuto1Points = 150

let automatiInterval = 500
let automatiIntSlash = 2
let boughtTimes = 0

document.addEventListener("DOMContentLoaded", function() {
    const automatize1 = document.getElementById("price-auto1")
    if (localStorage.getItem("continue-last-game")) {
        const welcomeMenu = document.getElementById("welcome-popup")
        welcomeMenu.style.display = "none"
        autoMultiplier = Number(localStorage.getItem("last-game-automultiplier"))
        autoMultiplier = Number(localStorage.getItem("last-game-automultiplierlvl"))
        minimumAuto1Points = Number(localStorage.getItem("last-game-minimumauto1points"))
        automatize1.textContent = `Necessario ${minimumAuto1Points} Cookies`
        automultInfoText.textContent = `Nivel ${autoMultiplierLvl}`
    } else {
        automatize1.disabled = true
        automatize1.textContent = `Necessario ${minimumAuto1Points} Cookies`
        automultInfoText.textContent = `Nivel ${autoMultiplierLvl}`
    }
})

function automatize1() {
    if (points > 9000000000000000) {
        return
    }
    if (navigator.vibrate) {
        navigator.vibrate(700)
    }
    audioHit()
    makePointsRed(250)
    const automatize1 = document.getElementById("price-auto1")
    const automatize1btn = document.getElementById("auto1-btn0")
    points = points - minimumAuto1Points
    if (autoMultiplier == 0){
        autoMultiplier++
    }
    autoMultiplier = autoMultiplier * 3
    minimumAuto1Points = Math.round(minimumAuto1Points * 2.8)
    autoMultiplierLvl = autoMultiplierLvl + 1

    pointsText.textContent = points
    boughtTimes = boughtTimes + 1
    localStorage.setItem("last-game-automultiplier", autoMultiplier)
    localStorage.setItem("last-game-automultiplierlvl", autoMultiplierLvl)
    localStorage.setItem("last-game-minimumauto1points", minimumAuto1Points)

    if (autoMultiplierLvl == 2 || autoMultiplierLvl == 5 || autoMultiplierLvl == 7 || autoMultiplierLvl == 10) {
        powerUpTriple(10000)
    }

    automatize1btn.disabled = true
    automatize1.textContent = `Necessario ${minimumAuto1Points} Cookies`
    automultInfoText.textContent = `Nivel ${autoMultiplierLvl}`
}
function truncNumbers(points) {
    if (points < 10000) {
        return points
    } else if (points < 1000000) {
        return `${Math.trunc(Number(points) /Number(1000))} Mil`
    } else if (points < 1000000000) {
        return `${(Number(points) /Number(1000000)).toFixed(1)} Mi`
    } else if (points < 1000000000000) {
        return `${(Number(points) /Number(1000000000)).toFixed(1)} B`
    } else if (points < 1000000000000000) {
        return `${(Number(points) /Number(1000000000000)).toFixed(1)} T`
    } else if (points < 9000000000000000) {
        return `${(Number(points) /Number(1000000000000000)).toFixed(1)} Q`
    } else {
        return "∞"
    }
}
function automatizedClicks() {
    const multiplier1btn = document.getElementById("mult1-btn0")
    const automatize1btn = document.getElementById("auto1-btn0")
    if (autoMultiplier == 0) {
        return
    } else {
            if (points > 9000000000000000) {
                const cookie = document.getElementById("cookie")
                cookie.style.filter = "saturate(0)"
                cookie.style.pointerEvents = "none"
                return
            }
        makePointsGreen(250)
        localStorage.setItem("last-game-points", points)
        points = Math.trunc(points + (autoMultiplier/Number(automatiIntSlash)))
        pointsText.textContent = truncNumbers(points)
        audioCracking()
        if (points > minimum1Points) {
            multiplier1btn.disabled = false
        } else {
            multiplier1btn.disabled = true
        }
        if (points > minimumAuto1Points) {
            automatize1btn.disabled = false
        } else {
            automatize1btn.disabled = true
        }
    }
}
function powerUpTriple(millisecs) {
    if (navigator.vibrate) {
        navigator.vibrate(700)
    }
    const usernameCstEntry = document.getElementById("username-custom-entry")
    const backup = usernameCstEntry.textContent
    usernameCstEntry.textContent = `Ganho Automatico 4x por ${millisecs / 1000}s`
    usernameCstEntry.style.color = "red"
    const automatize1btn = document.getElementById("auto1-btn0")
    autoMultiplier = autoMultiplier * 4
    automatize1btn.disabled = true
    setTimeout(() => {
        if (navigator.vibrate) {
            navigator.vibrate(700)
        }
        const usernameCstEntry = document.getElementById("username-custom-entry")
        usernameCstEntry.style.color = "white"
        usernameCstEntry.textContent = backup
        autoMultiplier = autoMultiplier / 4
        automatize1btn.disabled = false
    }, millisecs)
}
function bugReporterForAutomatized() {
    let points = localStorage.getItem("last-game-points")
    const automatize1 = document.getElementById("auto1-btn")
    /* Corrigir posteriormente *//*
    if (points < minimum1Points && automatize1.disabled == false) {
        automatize1.disabled = true
        console.log("automatizer.js: fixed button for automatizer (points lower than the minimum requirement)")
    }*/
    
}

setInterval(automatizedClicks, Number(automatiInterval))
setInterval(bugReporterForAutomatized, 100)