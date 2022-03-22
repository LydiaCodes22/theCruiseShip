class Port {
  constructor(name) {
    this.name = name;
    this.currentShips = [];
  }

  addShip(shipAtPort) {
    this.currentShips.push(shipAtPort);
  }

  removeShip(shipHasLeft) {
    for (let i = 0; i < this.currentShips.length; i++) {
      if (this.currentShips[i] === shipHasLeft) {
        this.currentShips.splice(i, 1);
      }
    }
  }
}
module.exports = { Port };
