function openFullscreen(img) {
    if (img.requestFullscreen) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            img.requestFullscreen();
        }
    } else if (img.mozRequestFullScreen) { // Firefox
        if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else {
            img.mozRequestFullScreen();
        }
    } else if (img.webkitRequestFullscreen) { // Chrome, Safari and Opera
        if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        } else {
            img.webkitRequestFullscreen();
        }
    } else if (img.msRequestFullscreen) { // IE/Edge
        if (document.msFullscreenElement) {
            document.msExitFullscreen();
        } else {
            img.msRequestFullscreen();
        }
    }
}