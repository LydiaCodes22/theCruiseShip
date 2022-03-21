/* eslint-disable no-undef */
const {Ship, Port, Itinerary} = require('../src/theCruiseShip')

describe('Port constructor', () => {
        const southamptom = new Port('Southampton')
        const dover = new Port('Dover')
        const portTester = new Itinerary(dover, southamptom)
        const ship = new Ship(portTester)
        const ship2 = new Ship(portTester)

    it('creates a new object', () => {
        expect(southamptom).toBeInstanceOf(Object)
    })
    it('sets the port name from the given argument', () => {
        expect(southamptom.name).toEqual('Southampton')
    })
    it('has a list of current ships which is updated when ships dock or set sail', () => {
        expect(southamptom.currentShips).toEqual([])
        expect(dover.currentShips).toContain(ship, ship2)
        ship.sail()
        ship.dock()
        expect(southamptom.currentShips).toContain(ship)
        expect(dover.currentShips).toContain(ship2)
    })
})
