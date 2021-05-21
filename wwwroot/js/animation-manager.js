var animationManager = {
    animate(image, onAnimationEnd) {
        boxManager.dropBoxElement.animate({ top: window.innerHeight - image.height }, config.animationTimeIn_ms, 'linear', onAnimationEnd);
    },

    onAnimationEnd() {
        $('.box').css({ border: '1px solid black' });
        boxManager.dropBoxElement.hide();
        imageManager.imagesDropCount++;
        imageManager.dropImage();
    },

    pauseAnimation() {
        gameManager.initalTop = parseInt(boxManager.dropBoxElement.css('top').replace('px', ''));
        gameManager.initialLeft = parseInt(boxManager.dropBoxElement.css('left').replace('px', ''));
        boxManager.dropBoxElement.pause();
    },

    resumeAnimation() {
        boxManager.dropBoxElement.resume();
    },

    animateTo(to) {
        var top = (to == 'topLeft' || to == 'topRight') ? 0 : window.innerHeight;
        var left = (to == 'topLeft' || to == 'bottomLeft') ? 0 : window.innerWidth - imageManager.currentImage.width - 10;

        boxManager.dropBoxElement.animate({ top: top - imageManager.currentImage.height, left: left, opacity: 0 }, 1500, 'linear', animationManager.onAnimationEnd);
    }
}