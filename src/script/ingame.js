const cookie = document.getElementById("cookie")
const pointsText = document.getElementById("pointsSpan")
const multInfoText = document.getElementById("multiplier-info")
const automultInfoText = document.getElementById("auto-multiplier-info")

let points = 0
let multiplier = 1
let minimum1Points = 30
let autoMultiplier = 0
let minimumAuto1Points = 80

let uptime = 0
let clickpersecs = 0

document.addEventListener("DOMContentLoaded", function() {
    const multiplier1 = document.getElementById("mult1-btn")
    const automatize1 = document.getElementById("auto1-btn")
    const multiplier1txt = "Multiplicador x2"
    const automatize1txt = "Automatizar 2cp/s"

    multiplier1.disabled = true
    multiplier1.textContent = multiplier1txt + ` (${minimum1Points} Cookies)`
    automatize1.disabled = true
    automatize1.textContent = automatize1txt + ` (${minimumAuto1Points} Cookies)`
})

function uptimeSetter() {
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
        msy = msy + 1
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
    const multiplier1 = document.getElementById("mult1-btn")
    const automatize1 = document.getElementById("auto1-btn")
    points = points + multiplier
    pointsText.textContent = points
    audioCracking()
    if (points > minimum1Points) {
        multiplier1.disabled = false
    }
    if (points > minimumAuto1Points) {
        automatize1.disabled = false
    }
})
function multiplier1() {
    if (navigator.vibrate) {
        navigator.vibrate(700)
    }
    audioHit()
    const multiplier1 = document.getElementById("mult1-btn")
    const multiplier1txt = "Multiplicador x2"

    points = points - minimum1Points
    multiplier = multiplier + multiplier
    minimum1Points = Math.round(minimum1Points * 2.4)

    pointsText.textContent = points
    
    multiplier1.disabled = true
    multiplier1.textContent = multiplier1txt + ` (${minimum1Points} Cookies)`
    multInfoText.textContent = `Multiplicador x${multiplier}`
}
function automatize1() {
    if (navigator.vibrate) {
        navigator.vibrate(700)
    }
    audioHit()
    const automatize1 = document.getElementById("auto1-btn")
    const automatize1txt = "Automatizar x2 cp/s"

    points = points - minimumAuto1Points
    if (autoMultiplier == 0){
        autoMultiplier++
    }
    autoMultiplier = autoMultiplier + autoMultiplier
    minimumAuto1Points = Math.round(minimumAuto1Points * 3.4)

    pointsText.textContent = points

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
        points = points + (autoMultiplier/2)
        pointsText.textContent = points
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
function blockBtnDoubleCLick() {
    const multiplier1 = document.getElementById("mult1-btn")
    const automatize1 = document.getElementById("auto1-btn")

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

setInterval(automatizedClicks, 500)
setInterval(blockBtnDoubleCLick, 50)
setInterval(uptimeSetter, 1000)