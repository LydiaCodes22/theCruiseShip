/* eslint-disable no-undef */
const { Port } = require('../src/port');

describe('Port', () => {
  const southamptom = new Port('Southampton');
  const dover = new Port('Dover');
  const fakeShip = { name: 'fakeShip' };

  describe('port creation', () => {
    it('creates a new object', () => {
      expect(southamptom).toBeInstanceOf(Object);
    });

    it('sets the port name from the given argument', () => {
      expect(southamptom.name).toEqual('Southampton');
    });
    it('has a currentShips property which is an array', () => {
      expect(dover.currentShips).toBeInstanceOf(Array);
    });
  });

  describe('the addShip method', () => {
    it('has an addShip method which will add a given ship  into the currentShips array', () => {
      dover.addShip(fakeShip);
      expect(dover.currentShips).toEqual(expect.arrayContaining([fakeShip]));
    });
  });

  describe('the removeShip method', () => {
    it('has a removeShip method which will remove a given ship from the currentShips array', () => {
      southamptom.addShip(fakeShip);
      southamptom.removeShip(fakeShip);
      expect(southamptom.currentShips).toEqual([]);
    });
  });
});
