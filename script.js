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