import { Human, Computer } from './objects';

export const beginGame = () => {
  const humanPlayer = new Human(prompt('What\'s your name?'));
  const computerPlayer = new Computer();
  let finished = false;
  let currentAttack;

  while (!finished) {
    // the human dishes out an attack
    if (humanPlayer.yourTurn) {
      currentAttack = humanPlayer.giveAttack(JSON.parse(prompt('Enter Attack Coordinates')));
      //computerPlayer.playerBoard.arrShip.forEach(ship => {
        //if (ship.coordinates.coord1 === currentAttack[0]
        //&& ship.coordinates.coord2 === currentAttack[1]) {
          console.log('You hit a ship!');
        //}
      //});

      // the computer receives an attack
      computerPlayer.playerBoard.receiveAttack(currentAttack);
      
      // check if the human won
      if (humanPlayer.playerBoard.allShipsSunk()) {
        finished = true;
        console.log('You\'ve sunk all their ships!');
        return finished;
      }
      // now it's the computer's turn
      humanPlayer.yourTurn = false;
      computerPlayer.yourTurn = true;
      
      // the computer dishes out an attack
    } else if (computerPlayer.yourTurn) {
      currentAttack = computerPlayer.randomAttack();

      // the human receives an attack
      humanPlayer.playerBoard.receiveAttack(currentAttack);
      
      // check if the computer won
      if (computerPlayer.playerBoard.allShipsSunk()) {
        finished = true;
        console.log('All of your ships have been sunk!');
        return finished;
      }

      // now it's the human's turn
      computerPlayer.yourTurn = false;
      humanPlayer.yourTurn = true;
    }
  }
};

/* // check for a winner, end the game if a player has won
    if (humanPlayer.playerBoard.allShipsSunk()
    || computerPlayer.playerBoard.allShipsSunk()) {
      finished = true;
      if (computerPlayer.playerBoard.allShipsSunk()) {
        console.log('You\'ve sunk all their ships!');
        return null;
      } else if (humanPlayer.playerBoard.allShipsSunk()) {
        console.log('All your ships have been sunk!');
        return null;
      }
    } */