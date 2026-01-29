function audioCracking() {
    const audChk = localStorage.getItem("is-audio-muted")
    if (audChk == 0 || audChk == 2) {
        const efxCracking = new Audio("../src/wav/cracking.wav")
        efxCracking.currentTime = 0.2
        efxCracking.play()
    } else if (audChk == 1) {
        // nothing
    } else {
        console.error("AudChk broken: ", audChk)
    }
}
function audioHit() {
    const audChk = localStorage.getItem("is-audio-muted")
    if (audChk == 0) {
        const efxHit = new Audio("../src/wav/windshield-hit.wav")
        efxHit.play()
    } else if (audChk == 1) {
        // nothing
    } else {
        console.error("AudChk broken: ", audChk)
    }
    
}
/*
function backgroundLofi() {
    const audChk = localStorage.getItem("is-audio-muted")
    if (audChk == 0) {
        const efxLow = new Audio("https://ice1.somafm.com/lush-128-mp3")
        efxLow.volume = 0.4
        efxLow.play()
        console.log("som reproduzido")
    } else if (audChk == 1) {
        console.log("mutado")
    } else {
        console.error("AudChk está quebrado: ", audChk)
    }
    
}
    */