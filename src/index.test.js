import { ship } from './index';

describe('Ship Object', () => {
  test('Ship created?', () => {
    expect(ship).toBeDefined();
  });
  test('Did we sink?', () => {
    expect(ship.isSunk()).toBeTruthy();
  });
  test('Add a hit?', () => {
    expect(ship.hit()).toEqual(5);
  });
});
