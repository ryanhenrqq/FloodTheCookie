const cookie = document.getElementById("cookie")
const pointsText = document.getElementById("pointsSpan")
const multInfoText = document.getElementById("multiplier-info")
const automultInfoText = document.getElementById("auto-multiplier-info")

let points = 0
let multiplier = 1
let minimum1Points = 30
let autoMultiplier = 0
let minimumAuto1Points = 80

document.addEventListener("DOMContentLoaded", function() {
    const multiplier1 = document.getElementById("mult1-btn")
    const automatize1 = document.getElementById("auto1-btn")
    const multiplier1txt = "Multiplier x2"
    const automatize1txt = "Automatize 2cp/s"

    multiplier1.disabled = true
    multiplier1.textContent = multiplier1txt + ` (Min. ${minimum1Points} Points)`
    automatize1.disabled = true
    automatize1.textContent = automatize1txt + ` (Min. ${minimumAuto1Points} Points)`
})
document.addEventListener("mousedown", (e) =>{
    const cookieFx = document.getElementById("effectMouse")
    const msx = e.clientX
    const msy = e.clientY
    cookieFx.style.transform = `translate(${msx}px, ${msy}px)`
})
cookie.addEventListener("click", function(e){
    const multiplier1 = document.getElementById("mult1-btn")
    const automatize1 = document.getElementById("auto1-btn")
    points = points + multiplier
    pointsText.textContent = points
    if (points > minimum1Points) {
        multiplier1.disabled = false
    }
    if (points > minimumAuto1Points) {
        automatize1.disabled = false
    }
})
function multiplier1() {
    const multiplier1 = document.getElementById("mult1-btn")
    const multiplier1txt = "Multiplier x2"

    points = points - minimum1Points
    multiplier = multiplier + multiplier
    minimum1Points = Math.round(minimum1Points * 2.4)

    pointsText.textContent = points
    
    multiplier1.disabled = true
    multiplier1.textContent = multiplier1txt + ` (Min. ${minimum1Points} Points)`
    multInfoText.textContent = `Multiplier x${multiplier}`
}
function automatize1() {
    const automatize1 = document.getElementById("auto1-btn")
    const automatize1txt = "Automatize x2 cp/s"

    points = points - minimumAuto1Points
    if (autoMultiplier == 0){
        autoMultiplier++
    }
    autoMultiplier = autoMultiplier + autoMultiplier
    minimumAuto1Points = Math.round(minimumAuto1Points * 3.4)

    pointsText.textContent = points

    automatize1.disabled = true
    automatize1.textContent = automatize1txt + ` (Min. ${minimumAuto1Points} Points)`
    automultInfoText.textContent = `Automatized x${autoMultiplier}cp/s`
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
setInterval(automatizedClicks, 500)
setInterval(blockBtnDoubleCLick, 50)