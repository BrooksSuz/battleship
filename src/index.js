import { Human, Computer } from './objects';

const beginGame = () => {
  const humanPlayer = new Human('Brooks');
  const computerPlayer = new Computer();
  let finished = false;
  let currentAttack;

  while (!finished) {
    // dish out attack
    if (humanPlayer.yourTurn) {
      currentAttack = humanPlayer.giveAttack();
      computerPlayer.yourTurn = true;
    } else if (computerPlayer.yourTurn) {
      currentAttack = computerPlayer.randomAttack();
      humanPlayer.yourTurn = true;
    }
  
    // receive attack
    if (computerPlayer.yourTurn) {
      computerPlayer.playerBoard.receiveAttack(currentAttack);
    } else if (humanPlayer.yourTurn) {
      humanPlayer.playerBoard.receiveAttack(currentAttack);
    }
  }

  // check for winner, end game if a player has won
  if (humanPlayer.playerBoard.allShipsSunk()
  || computerPlayer.playerBoard.allShipsSunk()) {
    finished = true;
    if (computerPlayer.playerBoard.allShipsSunk()) {
      return 'You\'ve sunk all their ships!';
    } else if (humanPlayer.playerBoard.allShipsSunk()) {
      return 'All your ships have been sunk!';
    }
  }
};
