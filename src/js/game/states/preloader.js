var preloader = {};

preloader.preload = function () {
	console.log('preload preload')
  this.game.load.image('background1', 'images/background1.png');
};

preloader.create = function () {
	console.log('preload create')
  this.game.state.start('game');
};

module.exports = preloader;
