var Background = {}

Background.fitBackgroundToWorld = function(game, background) {
	var oldWidth = background.width
	  , oldHeight = background.height
	  , aspectRatio = oldWidth/oldHeight
	  , worldAspectRatio = game.world.width/game.world.height
	  , isTooWide = aspectRatio > worldAspectRatio
console.log(background)
	if(isTooWide) {
		console.log('isTooWide')
		console.log(game.world.height)
		console.log(game.world.width)
		console.log(worldAspectRatio)
		console.log(aspectRatio)
		background.height = game.world.height
		background.width = background.height*aspectRatio
	} else {
		console.log(false)
		console.log(game.world.width)
		console.log(aspectRatio)
		background.width = game.world.width
		background.height = background.width/aspectRatio
	}
}

module.exports = Background


