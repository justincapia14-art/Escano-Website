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
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about");

  window.addEventListener("scroll", () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
      aboutSection.classList.add("show");
    }
  });
});

// FADE IN EFFECT KAPAG NAG-LOAD ANG PAGE
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Panimulang opacity (para sa smooth fade)
document.body.style.opacity = "0";
document.body.style.transition = "opacity 1.5s ease";


// GLOW EFFECT NA SUMUSUNOD SA MOUSE
document.addEventListener("mousemove", (e) => {
    const glow = document.querySelector(".cursor-glow");

    if (!glow) return;

    glow.style.left = e.pageX + "px";
    glow.style.top = e.pageY + "px";
});


// 3D TILT EFFECT NG IMAGE
const image = document.querySelector(".about-image img");

if (image) {
    image.addEventListener("mousemove", (e) => {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y / rect.height - 0.5) * 10;
        const rotateY = (x / rect.width - 0.5) * -10;

        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    image.addEventListener("mouseleave", () => {
        image.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
}


// FLICKER EFFECT NG TITLE (PARANG HORROR)
const title = document.querySelector(".about-text h1");

setInterval(() => {
    if (Math.random() > 0.85) {
        title.style.opacity = "0.5";
        setTimeout(() => {
            title.style.opacity = "1";
        }, 100);
    }
}, 200);