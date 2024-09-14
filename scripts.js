document.addEventListener("DOMContentLoaded", function() {
    const fullscreenButton = document.getElementById("fullscreen-button");
    const gameContainer = document.getElementById("game-container");

    fullscreenButton.addEventListener("click", function() {
        if (!document.fullscreenElement) {
            if (gameContainer.requestFullscreen) {
                gameContainer.requestFullscreen();
            } else if (gameContainer.mozRequestFullScreen) { // Firefox
                gameContainer.mozRequestFullScreen();
            } else if (gameContainer.webkitRequestFullscreen) { // Chrome, Safari, and Opera
                gameContainer.webkitRequestFullscreen();
            } else if (gameContainer.msRequestFullscreen) { // IE/Edge
                gameContainer.msRequestFullscreen();
            }
            fullscreenButton.textContent = "Verlaat volledig scherm";
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
            fullscreenButton.textContent = "Volledig scherm";
        }
    });
});

