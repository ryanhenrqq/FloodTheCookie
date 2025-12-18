const cookie = document.getElementById("cookie")
const pointsText = document.getElementById("pointsSpan")
const multInfoText = document.getElementById("multiplier-info")
const automultInfoText = document.getElementById("auto-multiplier-info")
const industriesCont = document.getElementById("industries-cont")
const rightHeadSpan = document.getElementById("all-right-span")

let points = 0
let multiplier = 1
let minimum1Points = 30
let autoMultiplier = 0
let minimumAuto1Points = 80
let greenWaitTimer = 0

let uptime = 0
let clickpersecs = 0
let gameSaved = false

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
    const multiplier1 = document.getElementById("mult1-btn")
    const automatize1 = document.getElementById("auto1-btn")
    const usernameCstEntry = document.getElementById("username-custom-entry")
    const multiplier1txt = "Multiplicador x2"
    const automatize1txt = "Automatizar 2cp/s"
    if (!localStorage.getItem("username")) {
        usernameCstEntry.textContent = "Padaria de Usuário"
    } else {
        usernameCstEntry.textContent = `Padaria de ${localStorage.getItem("username")}`
    }
    
    if (localStorage.getItem("continue-last-game")) {
        points = Number(localStorage.getItem("last-game-points"))
        multiplier = Number(localStorage.getItem("last-game-multiplier"))
        minimum1Points = Number(localStorage.getItem("last-game-minimum1points"))
        autoMultiplier = Number(localStorage.getItem("last-game-automultiplier"))
        minimumAuto1Points = Number(localStorage.getItem("last-game-minimumauto1points"))
        uptime = Number(localStorage.getItem("last-game-uptime"))
        industrieUnlocked = true
        multiplier1.textContent = multiplier1txt + ` (${minimum1Points} Cookies)`
        multInfoText.textContent = `Multiplicador x${multiplier}`
        automatize1.textContent = automatize1txt + ` (${minimumAuto1Points} Cookies)`
        automultInfoText.textContent = `Automatizado x${autoMultiplier}cp/s`
    } else {
        localStorage.setItem("last-game-points", 0)
        localStorage.setItem("last-game-multiplier", 0)
        localStorage.setItem("last-game-minimum1points", 0)
        localStorage.setItem("last-game-automultiplier", 0)
        localStorage.setItem("last-game-minimumauto1points", 0)
        localStorage.setItem("last-game-uptime", 0)

        
        multiplier1.disabled = true
        multiplier1.textContent = multiplier1txt + ` (${minimum1Points} Cookies)`
        automatize1.disabled = true
        automatize1.textContent = automatize1txt + ` (${minimumAuto1Points} Cookies)`
    }
})

function uptimeSetter() {
    localStorage.setItem("last-game-uptime", uptime)
    localStorage.setItem("timer", uptime)
    const elementTime = document.getElementById("uptime")
    uptime = uptime + 1
    let textShown = ""
    if (uptime < 60) {
        textShown = `Jogando por ${uptime} Segundos`
        elementTime.textContent = textShown
    } else {
        textShown = `Jogando por ${Math.trunc(Number(uptime)/60)} Minutos`
        elementTime.textContent = textShown
    }
}

let activationMilisecs = 0
let msx = 0
let msy = 0
document.addEventListener("mousedown", (e) =>{
    
    if (activationMilisecs == 0) {
        msx = e.clientX
        msy = e.clientY
        mouseEffectClick()
    } else {
        return
    }
})
function mouseEffectClick() {
    const cookieFx = document.getElementById("effectMouse")
    cookieFx.style.display = "block"
    cookieFx.style.transform = `translate(${msx}px, ${msy}px)`
    if (activationMilisecs <= 15) {
        msy = msy + 5
        activationMilisecs = activationMilisecs + 1
        setTimeout(mouseEffectClick, 10)
    } else {
        msx = 0
        msy = 0
        activationMilisecs = 0
        cookieFx.style.display = "none"
    }
}
cookie.addEventListener("click", function(e){
    if (navigator.vibrate) {
        navigator.vibrate(50)
    }
    makePointsGreen(250)
    const multiplier1 = document.getElementById("mult1-btn")
    const automatize1 = document.getElementById("auto1-btn")
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
    const multiplier1 = document.getElementById("mult1-btn")
    const multiplier1txt = "Multiplicador x2"

    if (!gameSaved) {
        gameSaved = true
        localStorage.setItem("continue-last-game", true)
    }

    points = points - minimum1Points
    multiplier = multiplier + multiplier
    minimum1Points = Math.round(minimum1Points * 2.8)

    pointsText.textContent = points
    localStorage.setItem("last-game-multiplier", multiplier)
    localStorage.setItem("last-game-minimum1points", minimum1Points)
    
    multiplier1.disabled = true
    multiplier1.textContent = multiplier1txt + ` (${minimum1Points} Cookies)`
    multInfoText.textContent = `Multiplicador x${multiplier}`
}
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
    minimumAuto1Points = Math.round(minimumAuto1Points * 3.1)

    pointsText.textContent = points
    boughtTimes = boughtTimes + 1
    localStorage.setItem("last-game-automultiplier", autoMultiplier)
    localStorage.setItem("last-game-minimumauto1points", minimumAuto1Points)

    automatize1.disabled = true
    automatize1.textContent = automatize1txt + ` (${minimumAuto1Points} Cookies)`
    automultInfoText.textContent = `Automatizado x${autoMultiplier}cp/s`
}
let automatiInterval = 500
let automatiIntSlash = 2
let boughtTimes = 0
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
function audioCracking() {
    const efxCracking = new Audio("../src/wav/cracking.wav")
    efxCracking.currentTime = 0.2
    efxCracking.play()
}
function audioHit() {
    const efxHit = new Audio("../src/wav/windshield-hit.wav")
    efxHit.play()
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault()
})
document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
      e.preventDefault()
    }
}, { passive: false })
let industrieUnlocked = false

function checkIndustriesAvailable() {
    if (industrieUnlocked) {
        return
    } else {
        if (points < 300) {
            industriesCont.style.display = "none"
        } else if (points >= 300) {
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

setInterval(automatizedClicks, Number(automatiInterval))
setInterval(uptimeSetter, 1000)
setInterval(checkIndustriesAvailable, 1000)
setInterval(EmptyGreenWaiter, 50)