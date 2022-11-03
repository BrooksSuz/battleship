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
    const arrShip = [
      this.carrier,
      this.battleship,
      this.cruiser,
      this.submarine,
      this.destroyer,
      this.testBoat
    ];

    arrShip.forEach(ship => {
      const shipCoords1 = ship.coordinates.coord1;
      const shipCoords2 = ship.coordinates.coord2;
      
      if (shipCoords1[0] === coord[0] && shipCoords1[1] === coord[1]) {
        ship.hit();
        return null;
      } else if (shipCoords2[0] === coord[0] && shipCoords2[1] === coord[1]) {
        ship.hit();
        return null;
      }
    });

    this.misses.push(coord);
  }
};
