function audioCracking() {
    const efxCracking = new Audio("../src/wav/cracking.wav")
    efxCracking.currentTime = 0.2
    efxCracking.play()
}
function audioHit() {
    const efxHit = new Audio("../src/wav/windshield-hit.wav")
    efxHit.play()
}