document.addEventListener("DOMContentLoaded", () => {
    const starsContainer = document.createElement("div");
    starsContainer.id = "stars-container";
    document.body.appendChild(starsContainer);

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");
        star.innerHTML = "✦";  // Unicode star symbol
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.animationDuration = `${3 + Math.random() * 3}s`; // Random twinkle duration
        star.style.fontSize = `${8 + Math.random() * 5}px`; // Slight variation in size

        starsContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 4000);  // Remove after animation completes
    }

    // Generate stars at random intervals
    setInterval(createStar, 800);  // Adjust interval for more or fewer stars
});
