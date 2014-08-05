function Player(name) {
  this.name = name;
};

Player.prototype.CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];


Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype.autopick = function() {
	this.picks(this.CHOICES[Math.floor(Math.random()*5)]);
};