export class Ship {
  constructor(shipLength, shipName) {
    this.shipName = shipName;
    this.shipLength = shipLength;
    this.hits = 0;
    this.coordinates = {
      coord1: [0, 1],
      coord2: [0, 5]
    };
  }

  hit() {
    console.log('It\'s a hit!')
    this.hits += 1;
  }

  isSunk() {
    if (this.shipLength <= this.hits) {
      return true;
    }
  }
}

export class Gameboard {
  constructor() {
    this.carrier = new Ship(6, 'carrier');
    this.battleship = new Ship(4, 'battleship');
    this.cruiser = new Ship(3, 'cruiser');
    this.submarine = new Ship(3, 'submarine');
    this.destroyer = new Ship(2, 'destroyer');
    //this.testBoat = new Ship(6, 'testBoat');
    this.arrShip = [
      this.carrier,
      this.battleship,
      this.cruiser,
      this.submarine,
      this.destroyer,
      //this.testBoat
    ];
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
    const arrShip = this.arrShip;

    arrShip.forEach(ship => {
      const shipCoords1 = ship.coordinates.coord1;
      const shipCoords2 = ship.coordinates.coord2;
      
      // is the boat horizontal?
      if ((shipCoords1[0] === shipCoords2[0])
      && (coord[0] === shipCoords1[0])) {
        // if so, is it within these coordinates?
        if ((coord[1] >= shipCoords1[1])
        && (coord[1] <= shipCoords2[1])) {
          ship.hit();
          if (ship.isSunk()) {
            this.sunkCount += 1;
          }
        } 
      // is the boat vertical?
      } else if ((shipCoords1[1] === shipCoords2[1])
      && (coord[1] === shipCoords1[1])) {
        // if so, is it within these coordinates?
        if ((coord[0] >= shipCoords1[0])
        && (coord[0] <= shipCoords2[0])) {
          ship.hit();
          if (ship.isSunk()) {
            this.sunkCount += 1;
          }
        }
      }
    });
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
  }
}

export class Computer extends Player {
  constructor(playerName = 'Computer') {
    super(playerName);
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
    return [coord1, coord2];
  }
}
