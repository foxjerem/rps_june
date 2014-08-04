describe("Player", function() {

  var player1;

   it('should have a name', function() {
   	player1 = new Player('Jeremy');
    expect(player1.name).toBe('Jeremy');
  });

});