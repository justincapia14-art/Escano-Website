<<<<<<< HEAD
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
=======
document.addEventListener('DOMContentLoaded', () => {
    
    const track = document.getElementById("track");
    const btnLeft = document.getElementById("btn-left");
    const btnRight = document.getElementById("btn-right");

    let currentIndex = 0;
    const maxIndex = 6;

    // KANAN BUTTON LOGIC
    btnRight.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            slideTrack();
        }
    });

    // KALIWA BUTTON LOGIC (Ito yung nawala sa iyo!)
    btnLeft.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            slideTrack();
        }
    });

    // FUNCTION PARA UMUSOG ANG TRACK
    function slideTrack() {
        const cardWidth = track.children[0].getBoundingClientRect().width; // Sinusukat ang lapad ng isang card
        const gap = 20; // Yung nilagay nating gap sa CSS
        
        // Kino-compute yung total na layo: (Lapad ng card + Espasyo) x current index
        const moveAmount = (cardWidth + gap) * currentIndex;
        
        // Ina-apply ang CSS transform para i-usog yung track pakaliwa (kaya negative value)
        track.style.transform = `translateX(-${moveAmount}px)`;
>>>>>>> dfdceae4f776f64676b5821e346085bc264c287c
    }
});