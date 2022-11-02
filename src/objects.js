export class Ship {
  constructor(shipLength) {
    this.shipLength = shipLength;
    this.hits = 0;
    this.sunk = false;
    this.coordinates = {
      coord1: null,
      coord2: null
    };
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

export const Gameboard = () => {
  const misses = [];

  const placeShips = (coord1, coord2) => {
    const carrier = new Ship(6);
    const battleship = new Ship(4);
    const cruiser = new Ship(3);
    const submarine = new Ship(3);
    const destroyer = new Ship(2);

    carrier.coordinates.coord1 = coord1;
    carrier.coordinates.coord2 = coord2;
    return carrier.coordinates;
  }

  const receiveAttack = (coord) => {
    if (coord === carrier.coordinates) {
      carrier.hit();
    } else {
      misses.push(coord);
    }
  }

  return { placeShips, receiveAttack };

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
