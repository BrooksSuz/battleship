import { Human, Computer } from './objects';

export const beginGame = () => {
  const humanPlayer = new Human('Brooks');
  const computerPlayer = new Computer();
  let humanTurn = true;
  let computerTurn = false;
  let finished = false;
  
  while (!finished) {
    let currentAttack;

    // the human dishes out an attack
    if (humanTurn) {
      currentAttack = JSON.parse((prompt('Enter Attack Coordinates. Example: [1, 2]')));

      // the computer receives an attack
      computerPlayer.playerBoard.receiveAttack(currentAttack);
      
      // check if the human won
      if (computerPlayer.playerBoard.allShipsSunk()) {
        finished = true;
        console.log('You\'ve sunk all their ships!');
      }
      // now it's the computer's turn
      humanTurn = false;
      computerTurn = true;

      console.log(humanPlayer);
      
      // the computer dishes out an attack
    } else if (computerTurn) {
      currentAttack = computerPlayer.randomAttack();

      // the human receives an attack
      humanPlayer.playerBoard.receiveAttack(currentAttack);
      
      // check if the computer won
      if (humanPlayer.playerBoard.allShipsSunk()) {
        finished = true;
        console.log('All of your ships have been sunk!');
      }

      // now it's the human's turn
      computerTurn = false;
      humanTurn = true;
    }
  }
};
