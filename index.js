document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".moving-image");
    const moveRightButton = document.getElementById("moveRight");
    let isMovingRight = false;

    moveRightButton.addEventListener("click", function() {
        isMovingRight = !isMovingRight;
        const animation = isMovingRight ? "moveRight" : "moveLeft";

        images.forEach(image => {
            image.style.animationName = animation;
            void image.offsetWidth; // Trigger reflow to restart the animation
        });
    });
});
