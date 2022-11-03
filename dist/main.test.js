import * as objects from '../src/objects';

const gameBoard = new objects.Gameboard();

describe('Ship Object', () => {
  test('Testboat created?', () => {
    expect(gameBoard.testBoat).toBeDefined();
  });
  test('Add a hit?', () => {
    expect(gameBoard.testBoat.hit()).toEqual(1);
    gameBoard.testBoat.hits = 0;
  });
  test('Did we sink?', () => {
    expect(gameBoard.testBoat.isSunk()).toBeFalsy();
  });
  test('Okay, NOW did we sink?', () => {
    gameBoard.testBoat.hit();
    gameBoard.testBoat.hit();
    gameBoard.testBoat.hit();
    gameBoard.testBoat.hit();
    gameBoard.testBoat.hit();
    gameBoard.testBoat.hit();
    expect(gameBoard.testBoat.isSunk()).toBeTruthy();
    gameBoard.testBoat.hits = 0;
    gameBoard.testBoat.sunk = false;
  });
});

describe('Gameboard Object', () => {
  test('Gameboard created?', () => {
    expect(gameBoard).toBeDefined();
  });
  test('Testboat placed?', () => {
    expect(gameBoard.testBoat).toBeDefined();
  });
  test('Attack hit first coordinate?', () => {
    gameBoard.receiveAttack([1, 3]);
    expect(gameBoard.testBoat.hits).toEqual(1);
    gameBoard.testBoat.hits = 0;
  });
  test('Attack hit second coordinate?', () => {
    gameBoard.receiveAttack([1, 9]);
    expect(gameBoard.testBoat.hits).toEqual(1);
    gameBoard.testBoat.hits = 0;
  });
  test('And if we miss?', () => {
    gameBoard.misses = [];
    gameBoard.receiveAttack([1, 2]);
    expect(gameBoard.misses).toEqual([[1, 2]]);
    gameBoard.misses = [];
  });
  test('All ships sunk?', () => {
    gameBoard.sunkCount = 4;
    gameBoard.sunkCount++;
    expect(gameBoard.allShipsSunk()).toBe('You lose');
  });
});
