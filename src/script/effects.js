/* Efeito do Cookie Caindo */
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