var game;
var player;

window.onload = function() {
	game = new Phaser.Game(800,500, Phaser.AUTO);
	game.state.add('Load', Load);
	game.state.add('Play', Play);
	game.state.start('Load');
}

var Load = function(game) {};
Load.prototype = {
	preload: function() {
		game.load.path = 'assets/img/';
		game.load.atlas('atlas', 'atlas.png', 'atlas.json');
	},
	create: function() {
		game.state.start('Play');
	}
};

var Play = function(game) {};

Play.prototype = {
	preload: function() {
	},
	create: function() {
		this.add.text(50, 20, 'Press R to reverse all ships horizontal velocities', {fontSize: '32px', font: 'Helvetica', fill: '#ffffff'});
		for (var i = 0; i < 50; i++){
			ship = new Ship(game, 'atlas', 'ship');
			game.add.existing(ship);
			// make ship go right
			ship.body.velocity.x = 150;
		}
	},
	update: function() {
	},
};
