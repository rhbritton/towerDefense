var Background = require('./background')
  , Game = {}

Game.create = function () {
	var self = this
	self.game.sprites = {}
	self.game.sprites['background1'] = self.game.add.sprite(self.game.world.centerX, self.game.world.centerY, 'background1')
	
	self.game.sprites['background1'].anchor.setTo(0.5, 0.5)
	Background.fitBackgroundToWorld(self.game, self.game.sprites['background1'])

	window.addEventListener("resize", function() {
		self.game.resizing = true;
	})
}

Game.getWorldDims = function() {
	return {
		width: window.innerWidth || document.body.clientWidth,
		height: window.innerHeight || document.body.clientHeight
	}
}

Game.setWorldDims = function(game) {
	var worldDims = Game.getWorldDims()

	game.width = worldDims.width
	game.height = worldDims.height
}

Game.resize = function(game) {
	Game.setWorldDims(game)
	Background.fitBackgroundToWorld(game, game.sprites['background1'])
}

Game.update = function(game) {
	if(game.resizing) {
		Game.resize(game)
		game.resizing = false
	}

	//console.log('update')
}

module.exports = Game
