export class Ship {
  constructor(shipLength) {
    this.shipLength = shipLength;
    this.hits = 0;
    this.sunk = false;
    this.coordinates = {
      coord1: [1, 3],
      coord2: [1, 9]
    };
  }

  hit() {
    return this.hits += 1;
  }

  isSunk() {
    if (this.shipLength <= this.hits) {
      this.sunk = true;
      return this.sunk;
    }
  }
};

export class Gameboard {
  constructor() {
    this.carrier = new Ship(6);
    this.battleship = new Ship(4);
    this.cruiser = new Ship(3);
    this.submarine = new Ship(3);
    this.destroyer = new Ship(2);
    this.testBoat = new Ship(6);
    this.misses = [];
  }

  receiveAttack(coord) {
    for (const ship in Gameboard) {
      if (coord === (ship.coordinates.coord1 || ship.coordinates.coord2)) {
        ship.hit();
        ship.isSunk();
      } else {
        this.misses.push(coord);
      }
    }
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
