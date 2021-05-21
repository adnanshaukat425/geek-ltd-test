var gameManager = {
    initialLeft: 0,
    initalTop: 0,
    finalTop: 0,
    
    init: function () {
        boxManager.dropBoxElement = $('.dropBox');
        boxManager.setBoxes();
        boxManager.setScoreBoxManager('scoreBox');

        imageManager.loadImages();
        imageManager.dropImage(2000);
    },

    reset: function () {
        imageManager.reset();
        scoreManager.reset();

        gameManager.init();
        $('#gameOverModal').modal('hide');
    },

    gameOver: function () {
        imageManager.imagesDropCount = config.totalImagesToDrop;
        $('#gameOverModal').modal('show');
    }
}