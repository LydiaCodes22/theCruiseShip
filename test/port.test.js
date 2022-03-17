/* eslint-disable no-undef */
const {Ship, Port, Itinerary} = require('../src/theCruiseShip')

describe('Port constructor', () => {
        const port2 = new Port('Southampton')
        const dover = new Port('Dover')
        const portTester = new Itinerary(dover, port2)
        const portTester2 = new Itinerary(dover, port2)
        const ship = new Ship(portTester)
        const ship2 = new Ship(portTester2)

    it('creates a new object', () => {
        expect(port2).toBeInstanceOf(Object)
    })
    it('sets the port name from the given argument', () => {
        expect(port2.name).toEqual('Southampton')
    })
    it('has a list of current ships which is updated when ships dock or set sail', () => {
        expect(port2.currentShips).toEqual([])
        expect(dover.currentShips).toContain(ship, ship2)
        ship.sail()
        ship.dock()
        expect(port2.currentShips).toContain(ship)
        expect(dover.currentShips).toContain(ship2)
    })
})
