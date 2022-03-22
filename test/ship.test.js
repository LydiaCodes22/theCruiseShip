/* eslint-disable no-undef */

const { Ship } = require('../src/ship');

describe('a ship', () => {
  let dover;
  let calais;
  let channelCrossing;
  let ship;

  beforeEach(()=> {
    dover = { addShip: jest.fn(), currentShips: [], removeShip: jest.fn() };
    calais = { addShip: jest.fn(), currentShips: [], removeShip: jest.fn() };
    channelCrossing = { ports: [dover, calais] };
    ship = new Ship(channelCrossing);
  });
  describe('ship instance creation', () => {
    it('can be instantiated and returns an object', () => {
      expect(ship).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
      expect(ship.currentLocation).toBe(dover);
    });
    it('has a previous port property which is set to null', () => {
      expect(ship.previousPort).toEqual(null);
    });
  });

  describe('a ships sail method', () => {
    it('can set sail and updates the current location of the ship to show the ship is at sea', () => {
      expect(ship.currentLocation).toBe(dover);
      ship.sail();
      expect(ship.currentLocation).toEqual('at sea');
    });
    it('sets the previous port property to the current port when it sails', () => {
      ship.sail();
      expect(ship.previousPort).toEqual(dover);
    });
    it('throws an error if you try to sail beyond the last destination', () => {
      expect(() => {
        ship.sail();
        ship.dock();
        ship.sail();
      }).toThrow();
    });
    it('calls the docks removeShip method when the ship sails', () => {
      ship.sail();
      expect(dover.removeShip).toHaveBeenCalledWith(ship);
    });
  });

  describe('a ships dock method', () => {
    it('reassigns the current location when it docks', () => {
      expect(ship.currentLocation).toEqual(dover);
      ship.sail();
      ship.dock();
      expect(ship.currentLocation).toEqual(calais);
    });
    it('calls on the docks addShip method when it docks', () => {
      ship.sail();
      ship.dock();
      expect(calais.addShip).toHaveBeenCalledWith(ship);
    });
  });
});
