// Ship prefab constructor function
function Ship(game, key, frame) {
	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, game.rnd.integerInRange(64,game.width-64), game.rnd.integerInRange(64,game.height-61), key, frame);

	// enable physics on the ship
	game.physics.enable(this);
}
// define prefab's prototype (Phaser.Sprite) and constructor (Ship)
Ship.prototype = Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor = Ship;

// override Phaser.Sprite update (reverse all ships horizontal velocities)
Ship.prototype.update = function() {
	if(game.input.keyboard.downDuration(Phaser.Keyboard.R, 1)) {
		this.body.velocity.x = this.body.velocity.x * -1;
	}
	// lets ships wrap across the game if it hits the edge
	game.world.wrap(this, 0, true);
}

