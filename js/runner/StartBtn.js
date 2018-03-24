var utils = require('./utils');
/** @const */
var IS_HIDPI = utils.IS_HIDPI;

/**
 * Game over panel.
 * @param {!HTMLCanvasElement} canvas
 * @param {Object} textImgPos
 * @param {Object} restartImgPos
 * @param {!Object} dimensions Canvas dimensions.
 * @constructor
 */
function StartBtn(canvas, restartImgPos, dimensions) {
    this.canvas = canvas;
    this.canvasCtx = canvas.getContext('2d');
    this.canvasDimensions = dimensions;
    this.restartImgPos = restartImgPos;
    this.draw();
};


/**
 * Dimensions used in the panel.
 * @enum {number}
 */
StartBtn.dimensions = {
    RESTART_WIDTH: 36,
    RESTART_HEIGHT: 32
};


StartBtn.prototype = {
    /**
     * Update the panel dimensions.
     * @param {number} width New canvas width.
     * @param {number} opt_height Optional new canvas height.
     */
    updateDimensions: function (width, opt_height) {
        this.canvasDimensions.WIDTH = width;
        if (opt_height) {
            this.canvasDimensions.HEIGHT = opt_height;
        }
    },

    /**
     * Draw the panel.
     */
    draw: function () {
        var dimensions = StartBtn.dimensions;

        var centerX = this.canvasDimensions.WIDTH / 2;


        var restartSourceWidth = dimensions.RESTART_WIDTH;
        var restartSourceHeight = dimensions.RESTART_HEIGHT;
        var restartTargetX = centerX - (dimensions.RESTART_WIDTH / 2);
        var restartTargetY = this.canvasDimensions.HEIGHT / 2;

        if (IS_HIDPI) {
            restartSourceWidth *= 2;
            restartSourceHeight *= 2;
        }

        // Restart button.
        this.canvasCtx.drawImage(Runner.imageSprite,
            this.restartImgPos.x, this.restartImgPos.y,
            restartSourceWidth, restartSourceHeight,
            restartTargetX, restartTargetY, dimensions.RESTART_WIDTH,
            dimensions.RESTART_HEIGHT);
    }
};


module.exports = StartBtn;