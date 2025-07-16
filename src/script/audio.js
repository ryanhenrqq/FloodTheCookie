

document.getElementById("cookie").addEventListener("click", audioCracking)

function audioCracking() {
    const efxCracking = new Audio("../src/wav/cracking.wav")
    efxCracking.currentTime = 0.2
    efxCracking.play()
}