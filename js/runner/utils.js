module.exports = {
    /**
     * Get random number.
     * @param {number} min
     * @param {number} max
     * @param {number}
     */
    getRandomNum: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    IS_HIDPI: false,
    FPS: 60
}