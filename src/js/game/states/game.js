var Game = {};

Game.create = function () {
  var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
  logo.anchor.setTo(0.5, 0.5);
};

Game.update = function(game) {
	console.log('update')
}

module.exports = Game;
