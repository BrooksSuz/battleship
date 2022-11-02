import { carrier } from './index';

describe('Ship Object', () => {
  test('Carrier created?', () => {
    expect(carrier).toBeDefined();
  });
  test('Add a hit?', () => {
    expect(carrier.hit()).toEqual(5);
  });
  test('Did we sink?', () => {
    expect(carrier.isSunk).toBeTruthy();
  });
});
