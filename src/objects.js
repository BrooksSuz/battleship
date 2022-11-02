import { carrier } from './index';

export class Ship {
  constructor(shipLength, hits, sunk) {
    this.shipLength = shipLength;
    this.hits = hits;
    this.sunk = sunk;
  }

  hit() {
    return this.hits += 1;
  }

  isSunk() {
    if (this.shipLength === this.hits) {
      this.sunk = true;
      return this.sunk;
    }
  }
};

export class Gameboard {
  constructor(ship) {
    this.ship = ship;
  }

  placeShip() {

  }

  /* createBoard() {
    for (let i = 0; i < 10; i++) {
      let row = document.createElement('div');
      row.classList.add('row');
      for (let j = 0; j < 10; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
      }
      document.querySelector('.container').appendChild(row);
    }
  } */
};
