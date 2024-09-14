document.addEventListener("DOMContentLoaded", function() {
    const fullscreenButton = document.getElementById("fullscreen-button");
    const gameFrame = document.getElementById("game-frame");

    fullscreenButton.addEventListener("click", function() {
        if (!document.fullscreenElement) {
            if (gameFrame.requestFullscreen) {
                gameFrame.requestFullscreen();
            } else if (gameFrame.mozRequestFullScreen) { // Firefox
                gameFrame.mozRequestFullScreen();
            } else if (gameFrame.webkitRequestFullscreen) { // Chrome, Safari, and Opera
                gameFrame.webkitRequestFullscreen();
            } else if (gameFrame.msRequestFullscreen) { // IE/Edge
                gameFrame.msRequestFullscreen();
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
