var boxManager = {
    dropBoxElement: null,
    scoreBox: null,
    boxesInfo: { topLeft: 'Japanese', topRight: 'Korean', bottomLeft: 'Chinese', bottomRight: 'Thai' },

    setBoxes() {
        $('#topLeft').html('"' + this.boxesInfo.topLeft + '"');
        $('#bottomLeft').html('"' + this.boxesInfo.bottomLeft + '"');
        $('#topRight').html('"' + this.boxesInfo.topRight + '"');
        $('#bottomRight').html('"' + this.boxesInfo.bottomRight + '"');
    },

    setScoreBoxManager(className) {
        boxManager.scoreBox = $('.' + className);
    },

    resetDropBoxSettings() {
        gameManager.initialLeft = (window.innerWidth / 2) - (config.defaultImageWidth / 2);
        this.dropBoxElement.attr('style', "top: 0 !important; left:" + gameManager.initialLeft + "px !important; opacity: 1")
    },
}