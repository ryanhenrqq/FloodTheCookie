function removePopupMenu() {
    const popupMenu = document.getElementById("popup-pause")
    const bodyBlur = document.getElementById("body-blur")
    bodyBlur.style.filter = "none"
    bodyBlur.style.pointerEvents = "auto"
    popupMenu.style.display = "none"
    const window = document.documentElement
    if (window.requestFullscreen){
        window.requestFullscreen()
    } else if(window.mozRequestFullScreen){
        window.mozRequestFullScreen()
    } else if (window.webkitRequestFullScreen){
        window.webkitRequestFullScreen()
    } else if (window.msRequestFullScreen){
        window.msRequestFullScreen()
    }
    if (document.getElementById("start-btn").textContent == "Iniciar"){
        document.getElementById("start-btn").innerHTML = '<img src="../src/res/ico/play.svg" alt="Play" class="side-small-btn">Continuar'
    }
}
const btnStart = document.getElementById("start-btn")
btnStart.addEventListener("click", removePopupMenu)
const logoBtn = document.getElementById("logo-button")
logoBtn.addEventListener("click", function() {
    const popupMenu = document.getElementById("popup-pause")
    const bodyBlur = document.getElementById("body-blur")

    bodyBlur.style.filter = "blur(5px)"
    bodyBlur.style.pointerEvents = "none"
    popupMenu.style.display = "flex"
})
const restartBtn = document.getElementById("restart-btn")
restartBtn.addEventListener("click", function(){
    const multiplier1 = document.getElementById("mult1-btn")
    const automatize1 = document.getElementById("auto1-btn")
    points = 0
    multiplier = 1
    minimum1Points = 30
    autoMultiplier = 0
    minimumAuto1Points = 80
    multiplier1.disabled = true
    automatize1.disabled = true
    const multiplier1txt = "Multiplier x2"
    const automatize1txt = "Automatize 2cp/s"
    multiplier1.textContent = multiplier1txt + ` (Min. ${minimum1Points} Points)`
    automatize1.textContent = automatize1txt + ` (Min. ${minimumAuto1Points} Points)`
    pointsText.textContent = points
    multInfoText.textContent = `Multiplier x1`
    automultInfoText.textContent = `Not Automatizated`
    removePopupMenu()
})
const exitBtn = document.getElementById("exit-btn")
exitBtn.addEventListener("click", function() { window.location.href = "../index.html";})