let autoMultiplier = 0
let minimumAuto1Points = 150

let automatiInterval = 500
let automatiIntSlash = 2
let boughtTimes = 0

document.addEventListener("DOMContentLoaded", function() {
    const automatize1 = document.getElementById("auto1-btn")
    const automatize1txt = "Automatizar 2cp/s"
    if (localStorage.getItem("continue-last-game")) {
        autoMultiplier = Number(localStorage.getItem("last-game-automultiplier"))
        minimumAuto1Points = Number(localStorage.getItem("last-game-minimumauto1points"))
        automatize1.textContent = automatize1txt + ` (${minimumAuto1Points} Cookies)`
        automultInfoText.textContent = `Automatizado x${autoMultiplier}cp/s`
    } else {
        automatize1.disabled = true
        automatize1.textContent = automatize1txt + ` (${minimumAuto1Points} Cookies)`
    }
})

function automatize1() {
    if (navigator.vibrate) {
        navigator.vibrate(700)
    }
    audioHit()
    makePointsRed(250)
    const automatize1 = document.getElementById("auto1-btn")
    const automatize1txt = "Automatizar x2 cp/s"

    points = points - minimumAuto1Points
    if (autoMultiplier == 0){
        autoMultiplier++
    }
    autoMultiplier = autoMultiplier * 3
    minimumAuto1Points = Math.round(minimumAuto1Points * 2.8)

    pointsText.textContent = points
    boughtTimes = boughtTimes + 1
    localStorage.setItem("last-game-automultiplier", autoMultiplier)
    localStorage.setItem("last-game-minimumauto1points", minimumAuto1Points)

    automatize1.disabled = true
    automatize1.textContent = automatize1txt + ` (${minimumAuto1Points} Cookies)`
    automultInfoText.textContent = `Automatizado x${autoMultiplier}cp/s`
}

function automatizedClicks() {
    const multiplier1 = document.getElementById("mult1-btn")
    const automatize1 = document.getElementById("auto1-btn")
    if (autoMultiplier == 0) {
        return
    } else {
        makePointsGreen(250)
        localStorage.setItem("last-game-points", points)
        points = Math.trunc(points + (autoMultiplier/Number(automatiIntSlash)))
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
        }
        audioCracking()
        if (points > minimum1Points) {
            multiplier1.disabled = false
        } else {
            multiplier1.disabled = true
        }
        if (points > minimumAuto1Points) {
            automatize1.disabled = false
        } else {
            automatize1.disabled = true
        }
    }
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