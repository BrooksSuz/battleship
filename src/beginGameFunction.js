import { Human, Computer } from './objects';

export const beginGame = () => {
  const humanPlayer = new Human(prompt('What\'s your name?'));
  const computerPlayer = new Computer();
  let finished = false;
  let currentAttack;

  while (!finished) {
    // dish out an attack
    if (humanPlayer.yourTurn) {
      currentAttack = humanPlayer.giveAttack(JSON.parse(prompt('Enter Attack Coordinates')));
      computerPlayer.yourTurn = true;
      computerPlayer.playerBoard.arrShip.forEach(ship => {
        if (ship.coordinates.coord1 === currentAttack[0]
        && ship.coordinates.coord2 === currentAttack[1]) {
          console.log('You hit a ship!');
        }
      });
    } else if (computerPlayer.yourTurn) {
      currentAttack = computerPlayer.randomAttack();
      humanPlayer.yourTurn = true;
    }
  
    // receive an attack
    if (computerPlayer.yourTurn) {
      computerPlayer.playerBoard.receiveAttack(currentAttack);
    } else if (humanPlayer.yourTurn) {
      humanPlayer.playerBoard.receiveAttack(currentAttack);
    }

    // check for a winner, end the game if a player has won
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
    }
  }
};
