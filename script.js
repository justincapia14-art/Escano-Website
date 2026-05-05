// ==========================================
// ESCANO HOME PAGE INTRO ANIMATION (PRELOADER)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const introScreen = document.getElementById("escano-intro");
    const introText = document.getElementById("intro-text");

    if (introScreen && introText) {
        setTimeout(function() {
            introText.innerText = "FROM THE INFERNO";
            introText.style.transform = "scale(1.2)"; 
        }, 1500);

        setTimeout(function() {
            introText.innerHTML = '<img src="images/main-title.png" alt="Escano" style="max-width: 500px; height: auto;">'; 
            introText.style.transform = "scale(1.6)";           
        }, 3000);

        // setTimeout(function() {
        //     introText.innerHTML = '<img src="images/main-title.png" alt="Escano" style="max-width: 500px; height: auto;">'; 
        //     introText.style.transform = "scale(1.6)";        
        // }, 4500);

        setTimeout(function() {
            introScreen.classList.add("fade-out-intro");
        }, 4500);

        setTimeout(function() {
            introScreen.style.display = "none";
        }, 6500);
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