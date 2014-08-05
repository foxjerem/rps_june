function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.player1WinLoseDraw = [0,0,0];
};

Game.prototype.PAIRS = {
  rock:     { scissors : 'crushes', lizard : 'squashes'   },
  paper:    { rock : 'smothers', spock : 'disproves'      },
  scissors: { lizard : 'decapitate', paper : 'cut'        },
  lizard:   { spock : 'poisons', paper : 'eats'           },
  spock:    { scissors : 'smashes', rock : 'vaporises'    }
};


Game.prototype.winner = function() {
 	
  if (this._isSamePick()) { 
    this.player1WinLoseDraw[2] += 1;
    return null; 
  };
 
  if(this._winningVerbFor(this.player1.pick, this.player2.pick)) {
    this.player1WinLoseDraw[0] += 1;
    return this.player1;
  } else {
    this.player1WinLoseDraw[1] += 1;
    return this.player2;
  };

};

Game.prototype.loser = function() {

  return (this.winner() === this.player1 ? this.player2 : this.player1);

};

Game.prototype.winningMessage = function() {
  
  var message

  if (this.winner()) {
   message =  [this.winner().pick, this._winningVerbFor(this.winner().pick, 
    this.loser().pick), this.loser().pick].join(' ');
  } else {
    message = 'DRAW';
  };

  return message

};

Game.prototype.nameMessage = function() {
  if(this.winner()){
    return this.winner().name + ' wins!';
  } else {
    return '';
  };

};

Game.prototype._isSamePick = function() {
	
  return this.player1.pick === this.player2.pick;

};

Game.prototype.__isPlayer1Win = function() {
	
  return this._winningVerb !== null;

};

Game.prototype._winningVerbFor = function(pick, opponentPick) {
  
  return this.PAIRS[pick][opponentPick];

};

