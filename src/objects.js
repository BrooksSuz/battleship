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
    if (this.shipLength === this.hits) {
      this.sunk = true;
      return this.sunk;
    }
  }
}

export class Gameboard {
  constructor() {
    this.carrier = new Ship(6);
    this.battleship = new Ship(4);
    this.cruiser = new Ship(3);
    this.submarine = new Ship(3);
    this.destroyer = new Ship(2);
    this.testBoat = new Ship(6);
    this.misses = [];
    this.sunkCount = 0;
  }

  allShipsSunk() {
    if (this.sunkCount === 5) {
      return true;
    }
    return false;
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
      
      // Horizontal logic
      if ((shipCoords1[0] === shipCoords2[0])
      && (coord[0] === shipCoords1[0])) {
        if ((coord[1] >= shipCoords1[1])
        && (coord[1] <= shipCoords2[1])) {
          ship.hit();
          ship.isSunk();
          if (ship.sunk) {
            this.sunkCount += 1;
            this.allShipsSunk();
          }
          return null;
        } 
      // Vertical logic
      } else if ((shipCoords1[1] === shipCoords2[1])
      && (coord[1] === shipCoords1[1])) {
        if ((coord[0] >= shipCoords1[0])
        && (coord[0] <= shipCoords2[0])) {
          ship.hit();
          ship.isSunk();
          if (ship.sunk) {
            this.sunkCount += 1;
            this.allShipsSunk();
          }
          return null;
        }
      }
    });

    // On miss, push coord to misses array
    this.misses.push(coord);
  }
}

export class Player {
  constructor(playerName) {
    this.playerBoard = new Gameboard();
    this.playerName = playerName;
  }
}

export class Human extends Player {
  constructor(playerName) {
    super(playerName);
    this.yourTurn = true;
  }

  giveAttack(attack = [1, 2]) {
    this.yourTurn = false;
    return attack;
  }
}

export class Computer extends Player {
  constructor(playerName = 'Computer') {
    super(playerName);
    this.yourTurn = false;
  }

  randomAttack() {
    const arrMiss = this.playerBoard.misses;
    const random = () => Math.floor(Math.random() * 10);
    let coord1 = random();
    let coord2 = random();

    if (arrMiss.length === 0) {
      return [coord1, coord2];
    }

    for (let i = 0; i < arrMiss.length; i++) {
      if ((arrMiss[i][0] === coord1) && (arrMiss[i][1] === coord2)) {
        coord1 = random();
        coord2 = random();
        i--;
      }
    }

    this.yourTurn = false;
    return [coord1, coord2];
  }
}
