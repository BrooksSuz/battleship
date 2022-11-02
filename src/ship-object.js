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
    return this.shipLength === this.hits;
  }
};
