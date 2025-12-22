function removePopupMenu() {
    const originalMenu = document.getElementById("main-header-pause")
    const popupMenu = document.getElementById("menu-header-pause")
    const asideMenu = document.getElementById("aside-bar")
    const bodyBlur = document.getElementById("main-content-blocking")
    bodyBlur.style.filter = "none"
    bodyBlur.style.pointerEvents = "auto"
    popupMenu.style.display = "none"
    originalMenu.style.display = "flex"
    asideMenu.style.display = "flex"
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
    const originalMenu = document.getElementById("main-header-pause")
    const popupMenu = document.getElementById("menu-header-pause")
    const bodyBlur = document.getElementById("main-content-blocking")
    const asideMenu = document.getElementById("aside-bar")
    bodyBlur.style.filter = "blur(5px)"
    bodyBlur.style.pointerEvents = "none"
    originalMenu.style.display = "none"
    popupMenu.style.display = "flex"
    asideMenu.style.display = "none"
})
const restartBtn = document.getElementById("restart-btn")
restartBtn.addEventListener("click", function(){
    const multiplier1 = document.getElementById("mult1-btn")
    const automatize1 = document.getElementById("auto1-btn")
    const multiplier2 = document.getElementById("price-mult1-btn")
    const automatize2 = document.getElementById("price-auto1-btn")
    points = 0
    multiplier = 1
    minimum1Points = 30
    autoMultiplier = 0
    minimumAuto1Points = 80
    multiplierLvl = 1
    autoMultiplierLvl = 0
    multiplier1.disabled = true
    automatize1.disabled = true
    multiplier2.textContent = `Necessario ${minimum1Points} Cookies`
    automatize2.textContent = `Necessario ${minimumAuto1Points} Cookies`
    pointsText.textContent = points
    multInfoText.textContent = `Nivel ${multiplierLvl}`
    automultInfoText.textContent = `Nivel ${autoMultiplierLvl}`
    removePopupMenu()
})
const exitBtn = document.getElementById("exit-btn")
exitBtn.addEventListener("click", function() { window.location.href = "../index.html";})

const welcomeMenu = document.getElementById("welcome-popup")
const welcomeStart = document.getElementById("welcome-start-btn")
welcomeStart.addEventListener("click", function() {
    welcomeMenu.style.display = "none"
})