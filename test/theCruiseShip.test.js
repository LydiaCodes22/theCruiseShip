const Ship = require('../src/theCruiseShip')

describe('constructor', () => {
    const ship = new Ship('New York')
    it('returns an object', () => {
        expect(ship).toBeInstanceOf(Object)
    })
    it('sets the starting port', () => {
        expect(ship.startingPort).toEqual('New York')
    })
})