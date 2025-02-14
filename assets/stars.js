function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.innerHTML = "✦"; // Twinkling effect
    document.getElementById("stars-container").appendChild(star);

    // Position anywhere within the entire page height
    const pageHeight = document.documentElement.scrollHeight;
    const pageWidth = document.documentElement.clientWidth;

    star.style.left = Math.random() * pageWidth + "px";
    star.style.top = Math.random() * pageHeight + "px";

    setTimeout(() => {
        star.remove();
    }, 4000); // Adjust time before disappearing
}

// Generate stars at intervals
setInterval(createStar, 200);

// Reposition stars on resize to cover the full page
window.addEventListener("resize", () => {
    document.getElementById("stars-container").style.height = document.documentElement.scrollHeight + "px";
});
