describe("Game", function() {

  var player1, player2, game;
  
  beforeEach(function() {
    player1 = new Player('Alex');
    player2 = new Player('Bob');
    game = new Game(player1, player2);
  });

  describe('winning and losing', function() {

    describe('counters', function() {
    
      it('should count wins', function() {
        
        player1.picks('rock');
        player2.picks('scissors');
        game.winner();
        expect(game.player1WinLoseDraw).toEqual([1,0,0]);

      });  

      it('should count losses', function() {
        
        player2.picks('rock');
        player1.picks('scissors');
        game.winner();
        expect(game.player1WinLoseDraw).toEqual([0,1,0]);

      });  

      it('should count draws', function() {
        
        player1.picks('rock');
        player2.picks('rock');
        game.winner();
        expect(game.player1WinLoseDraw).toEqual([0,0,1]);

      });

    });


    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
        expect(game.winningMessage()).toBe('rock crushes scissors')

      });

      it('should beat lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
        expect(game.winningMessage()).toBe('rock squashes lizard')

      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
        expect(game.winningMessage()).toBe('paper smothers rock')


      });

      it('should lose to spock', function() {

        player1.picks('rock');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
        expect(game.winningMessage()).toBe('spock vaporises rock')

      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
        expect(game.winningMessage()).toBe('paper smothers rock')

      });
      
      it('should beat spock', function() {

        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
        expect(game.winningMessage()).toBe('paper disproves spock')

      });

      it('should lose to scissors', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
        expect(game.winningMessage()).toBe('scissors cut paper')

      });

      it('should lose to lizard', function() {

        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
        expect(game.winningMessage()).toBe('lizard eats paper')

      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
        expect(game.winningMessage()).toBe('scissors cut paper')

      });

      it('should beat lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
        expect(game.winningMessage()).toBe('scissors decapitate lizard')

      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
        expect(game.winningMessage()).toBe('rock crushes scissors')

      });

      it('should lose to spock', function() {

        player1.picks('scissors');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
        expect(game.winningMessage()).toBe('spock smashes scissors')

      });

    });

    describe('lizard', function() {

      it('should beat paper', function() {

        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
        expect(game.winningMessage()).toBe('lizard eats paper')

      });

      it('should beat spock', function() {

        player1.picks('lizard');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
        expect(game.winningMessage()).toBe('lizard poisons spock')

      });

      it('should lose to rock', function() {

        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
        expect(game.winningMessage()).toBe('rock squashes lizard')

      });

      it('should lose to scissors', function() {

        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
        expect(game.winningMessage()).toBe('scissors decapitate lizard')

      });

    });

    describe('spock', function() {

      it('should beat scissors', function() {

        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
        expect(game.winningMessage()).toBe('spock smashes scissors')

      });

      it('should beat rock', function() {

        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
        expect(game.winningMessage()).toBe('spock vaporises rock')

      });

      it('should lose to lizard', function() {

        player1.picks('spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
        expect(game.winningMessage()).toBe('lizard poisons spock')

      });

      it('should lose to paper', function() {

        player1.picks('spock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
        expect(game.winningMessage()).toBe('paper disproves spock')

      });

    });

  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {
        var drawGameResults = ['rock', 'paper', 'scissors', 'spock', 'lizard'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null, null, null]);
        expect(game.winningMessage()).toBe('DRAW');

      });

    });

  });

});