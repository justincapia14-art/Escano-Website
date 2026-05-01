// ==========================================
// ESCANO HOME PAGE INTRO ANIMATION (PRELOADER)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const introScreen = document.getElementById("escano-intro");
    const introText = document.getElementById("intro-text");

    // Tumatakbo lang ito kung nasa Home Page tayo
    if (introScreen && introText) {
        // Step 1: Palitan ang text to "FIGHT."
        setTimeout(function() {
            introText.innerText = "FROM THE";
        }, 800);

        // Step 2: Palitan ang text to "ESCAPE."
        setTimeout(function() {
            introText.innerText = "INFERNO";
        }, 1600);

        // Step 3: Palitan ang text to "ESCANO." at kulayan ng pula
        setTimeout(function() {
            introText.innerText = "ESCANO";
            introText.style.color = "#ff2a00"; 
            introText.style.transform = "scale(1.2)"; 
        }, 2400);

        // Step 4: I-fade out na yung buong black screen
        setTimeout(function() {
            introScreen.classList.add("fade-out-intro");
        }, 3500);

        // Step 5: Tuluyan nang tanggalin ang black screen sa code
        setTimeout(function() {
            introScreen.style.display = "none";
        }, 4500);
    }
});

// ==========================================
// VANTA.JS FOG BACKGROUND (INFERNO THEME)
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
            highlightColor: 0xff2a00, /* Inferno Red - Apoy */
            midtoneColor: 0xff8c00, /* Orange - Baga */
            lowlightColor: 0x110000, /* Dark Red - Anino */
            baseColor: 0x050505, /* Pitch Black - Dilim */
            blurFactor: 0.60, /* Gaano kakapal ang usok */
            speed: 2.00, /* Bilis ng galaw ng usok */
            zoom: 1.00
        });
    }
});

// ==========================================
// CAROUSEL LOGIC (DYNAMIC FIX PARA SA MOBILE AT PC)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById("track");
    const btnLeft = document.getElementById("btn-left");
    const btnRight = document.getElementById("btn-right");

    let currentIndex = 0;

    // KANAN BUTTON LOGIC
    if (btnRight) {
        btnRight.addEventListener("click", () => {
            if (!track || !track.children[0]) return; // Safety check

            // MAGIC DITO: Kinukuha nang live kung ilang cards ang kasya sa screen
            const totalCards = track.children.length;
            const viewportWidth = track.parentElement.getBoundingClientRect().width;
            const cardWidth = track.children[0].getBoundingClientRect().width;
            
            const visibleCards = Math.round(viewportWidth / cardWidth);
            
            // Dynamic ang max limit! Total cards minus mga nakikita sa screen
            let maxIndex = totalCards - visibleCards;
            if (maxIndex < 0) maxIndex = 0;

            if (currentIndex < maxIndex) {
                currentIndex++;
                slideTrack();
            }
        });
    }

    // KALIWA BUTTON LOGIC
    if (btnLeft) {
        btnLeft.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                slideTrack();
            }
        });
    }

    // FUNCTION PARA UMUSOG ANG TRACK
    function slideTrack() {
        if (!track || !track.children[0]) return;
        
        const cardWidth = track.children[0].getBoundingClientRect().width; 
        
        // DYNAMIC GAP: 15px pag naka-cellphone, 20px pag nasa PC (Tugma sa CSS mo)
        const gap = window.innerWidth <= 768 ? 15 : 20; 
        
        const moveAmount = (cardWidth + gap) * currentIndex;
        track.style.transform = `translateX(-${moveAmount}px)`;
    }
});

// ==========================================
// DEVELOPER POP-UP MODAL LOGIC (UPDATED WITH STATS)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const devCards = document.querySelectorAll(".dev-card");
    const modal = document.getElementById("dev-modal");
    const modalImg = document.getElementById("modal-img");
    const modalName = document.getElementById("modal-name");
    const modalRole = document.getElementById("modal-role");
    const modalBio = document.getElementById("modal-bio"); 
    
    // MGA ID PARA SA STAT BARS
    const stat1Bar = document.getElementById("modal-stat1");
    const stat2Bar = document.getElementById("modal-stat2");
    const stat3Bar = document.getElementById("modal-stat3");

    const closeModal = document.getElementById("close-modal");

    if (devCards.length > 0 && modal) {
        devCards.forEach(card => {
            card.style.cursor = "pointer";
            
            card.addEventListener("click", () => {
                // KUNIN ANG INFO SA CARD
                const imgSrc = card.querySelector("img").src;
                const name = card.querySelector("h3").innerText;
                const role = card.querySelector(".role").innerText;
                
                const hiddenBio = card.querySelector(".hidden-bio");
                const bioText = hiddenBio ? hiddenBio.innerText : "A mysterious entity of the Inferno.";

                // KUNIN ANG STATS MULA SA HTML (Default ay 50% kung nakalimutan mo lagyan)
                const stat1 = card.getAttribute("data-stat1") || "50%";
                const stat2 = card.getAttribute("data-stat2") || "50%";
                const stat3 = card.getAttribute("data-stat3") || "50%";

                // IPASA SA MODAL
                modalImg.src = imgSrc;
                modalName.innerText = name;
                modalRole.innerText = role;
                modalBio.innerText = bioText; 

                // IPASA ANG PERCENTAGE SA HABANG NG BARS SA MODAL
                stat1Bar.style.width = stat1;
                stat2Bar.style.width = stat2;
                stat3Bar.style.width = stat3;

                modal.classList.add("show-modal");
            });
        });

        closeModal.addEventListener("click", () => {
            modal.classList.remove("show-modal");
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("show-modal");
            }
        });
    }
});

// ==========================================
// SCROLL ANIMATION (SLIDE IN TRIGGER)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Pag nakita sa screen, papasok siya!
                entry.target.classList.add('show-slide');
            }
        });
    }, {
        threshold: 0.15 // Mag-t-trigger kapag 15% ng item ay lumitaw na sa screen
    });

    // Hanapin lahat ng may class na slide-left at slide-right
    const hiddenElements = document.querySelectorAll('.hidden-slide-left, .hidden-slide-right');
    hiddenElements.forEach((el) => observer.observe(el));
});

// ==========================================
// PAGE EXIT TRANSITION (SLIDE OUT)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            
            // Wag i-animate kung anchor link (#) gaya ng #feature o bubukas sa bagong tab
            if (target.startsWith('#') || this.getAttribute('target') === '_blank') return;
            
            e.preventDefault(); // Pigilan muna ang paglipat ng page
            
            // I-slide palabas ang buong page
            document.body.classList.add('slide-out-page');
            
            // Maghintay ng 400ms bago tuluyang lumipat
            setTimeout(() => {
                window.location.href = target;
            }, 400);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about");

  if (aboutSection) {
      window.addEventListener("scroll", () => {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
          aboutSection.classList.add("show");
        }
      });
  }
});

// FADE IN EFFECT KAPAG NAG-LOAD ANG PAGE
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Panimulang opacity (para sa smooth fade)
document.body.style.opacity = "0";
document.body.style.transition = "opacity 1.5s ease";


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

if (title) {
    setInterval(() => {
        if (Math.random() > 0.85) {
            title.style.opacity = "0.5";
            setTimeout(() => {
                title.style.opacity = "1";
            }, 100);
        }
    }, 200);
}