var Runner = require('./runner');

var IS_WX = (function(){
	var ua = window.navigator.userAgent.toLowerCase(); 
    if (ua.match(/MicroMessenger/i) == 'micromessenger') { 
        return true;
    } else { 
        return false;
    } 
})();


window.onload = function () {
	var runner = new Runner('#game-containter', {
		ACCELERATION: 0.001,
		BG_CLOUD_SPEED: 0.2,
		BOTTOM_PAD: 10,
		CLEAR_TIME: 3000,
		CLOUD_FREQUENCY: 0.5,
		GAMEOVER_CLEAR_TIME: 750,
		GAP_COEFFICIENT: 0.6,
		GRAVITY: 0.6,
		INITIAL_JUMP_VELOCITY: 12,
		INVERT_FADE_DURATION: 12000,
		INVERT_DISTANCE: 700,
		MAX_BLINK_COUNT: 3,
		MAX_CLOUDS: 6,
		MAX_OBSTACLE_LENGTH: 3,
		MAX_OBSTACLE_DUPLICATION: 2,
		MAX_SPEED: 13,
		MIN_JUMP_HEIGHT: 35,
		MOBILE_SPEED_COEFFICIENT: 1.2,
		RESOURCE_TEMPLATE_ID: 'audio-resources',
		SPEED: 6,
		SPEED_DROP_COEFFICIENT: 3,
		ARCADE_MODE_INITIAL_TOP_POSITION: 35,
		ARCADE_MODE_TOP_POSITION_PERCENT: 0.1,
		afterGameOver: function() {
			if (IS_WX) {
				document.getElementById('game-share').style.display = 'block';
			}
		}
	});

	document.getElementById('game-share-btn').addEventListener('touchend', function() {
		document.getElementById('share-panel').style.display = 'block';
	});

	document.getElementById('share-panel').addEventListener('touchend', function() {
		document.getElementById('share-panel').style.display = 'none';
	});
	
}