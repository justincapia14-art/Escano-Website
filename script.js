// ==========================================
// ESCANO HOME PAGE INTRO ANIMATION (PRELOADER)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const introScreen = document.getElementById("escano-intro");
    const introText = document.getElementById("intro-text");

    if (introScreen && introText) {
        setTimeout(function() {
            introText.innerText = "FROM THE";
        }, 800);

        setTimeout(function() {
            introText.innerText = "INFERNO";
        }, 1600);

        setTimeout(function() {
            introText.innerText = "ESCANO";
            introText.style.color = "#ff2a00"; 
            introText.style.transform = "scale(1.2)"; 
        }, 2400);

        setTimeout(function() {
            introScreen.classList.add("fade-out-intro");
        }, 3500);

        setTimeout(function() {
            introScreen.style.display = "none";
        }, 4500);
    }
});

// ==========================================
// VANTA.JS FOG BACKGROUND
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('vanta-bg')) {
        VANTA.FOG({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0xff2a00,
            midtoneColor: 0xff8c00, 
            lowlightColor: 0x110000, 
            baseColor: 0x050505, 
            blurFactor: 0.60,
            speed: 2.00, 
            zoom: 1.00
        });
    }
});