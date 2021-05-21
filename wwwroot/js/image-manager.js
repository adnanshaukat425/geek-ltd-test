var imageManager = {
    imagesObjects: [],
    imagesDropCount: 0,
    currentImage: null,

    loadImages() {
        $.each(imagesData, function (k, v) {
            imageManager.imagesObjects.push(new Image(config.defaultImageWidth, config.defaultImageHeight, v.url, v.nationality, v.id));
        });
    },

    dropImage(timeout) {
        if (imageManager.imagesDropCount < config.totalImagesToDrop) {
            setTimeout(function () {
                boxManager.resetDropBoxSettings();
                imageManager.currentImage = imageManager.getImage();
                if (imageManager.currentImage) {
                    boxManager.dropBoxElement.html('<img width="' + imageManager.currentImage.width + '" height="' + imageManager.currentImage.height + '" src="' + imageManager.currentImage.src + '"></img>');
                }
                boxManager.dropBoxElement.show();

                animationManager.animate(imageManager.currentImage, animationManager.onAnimationEnd);
            }, timeout || 0);
        }
        else {
            //Game over
            gameManager.gameOver();
        }
    },

    getImage() {
        if (imageManager.imagesObjects) {
            var index = Math.floor(Math.random() * ((config.totalImagesToDrop > this.imagesObjects.length ? (this.imagesObjects.length) : config.totalImagesToDrop) - 0)) + 0;

            (index);
            return imageManager.imagesObjects[index];
        }
        return false;
    },

    reset() {
        this.imagesDropCount = 0;
    }
}