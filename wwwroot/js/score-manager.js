var scoreManager = {
    score: 0,
    isScoring: false,
    
    updateScore(selection) {
        if (boxManager.boxesInfo[selection].trim().toLowerCase() == imageManager.currentImage.color.trim().toLowerCase()) {
            this.score += config.incrementScore;
            $('#' + selection).css({ border: '2px solid green' });
        }
        else {
            this.score -= config.decrementScore;
            $('#' + selection).css({ border: '2px solid red' });
        }
        this.displayScore();
    },

    displayScore() {
        if (boxManager.scoreBox) {
            boxManager.scoreBox.html(this.score);
        }
    },

    reset() {
        this.score = 0;
        this.displayScore();
    }
}