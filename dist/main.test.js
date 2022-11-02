import * as objects from '../src/objects';

const testBoat = new objects.Ship(6);
const gameBoard = new objects.Gameboard();


describe('Ship Object', () => {
  test('testBoat created?', () => {
    expect(testBoat).toBeDefined();
  });
  test('Add a hit?', () => {
    expect(testBoat.hit()).toEqual(1);
  });
  test('Did we sink?', () => {
    expect(testBoat.isSunk).toBeTruthy();
  });
});

describe('Gameboard Object', () => {
  test('gameBoard created?', () => {
    expect(gameBoard).toBeDefined();
  });
  test('Carrier placed?', () => {
    expect(gameBoard.placeShips([1, 3], [1, 9])).toStrictEqual({"coord1": [1, 3], "coord2": [1, 9]});
  });
});