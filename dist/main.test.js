import * as objects from '../src/objects';

const gameBoard = new objects.Gameboard();

describe('Ship Object', () => {
  test('Testboat created?', () => {
    expect(gameBoard.testBoat).toBeDefined();
  });
  test('Add a hit?', () => {
    expect(gameBoard.testBoat.hit()).toEqual(1);
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
    expect(gameBoard.testBoat.isSunk()).toBeTruthy();
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
    expect(gameBoard.testBoat.hits).toEqual(7);
  });
  test('Attack hit second coordinate?', () => {
    gameBoard.receiveAttack([1, 9]);
    expect(gameBoard.testBoat.hits).toEqual(8);
  });
  test('And if we miss?', () => {
    gameBoard.misses = [];
    gameBoard.receiveAttack([1, 2]);
    expect(gameBoard.misses).toStrictEqual([[1, 2]]);
  });
});
