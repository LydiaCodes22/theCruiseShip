/* eslint-disable no-undef */
const {Ship, Port, Itinerary} = require('../src/theCruiseShip')


describe('Ship constructor', () => {
    const dover = new Port('Dover')
    const calais = new Port('Calais')
    const channelCrossing = new Itinerary(dover, calais)
    const ship = new Ship(channelCrossing)
       it('returns an object', () => {
        expect(ship).toBeInstanceOf(Object)
    })
    it('sets the starting port', () => {
        expect(ship.currentLocation).toBe(dover)
    })
    it('has a previous port property which is set to null', () => {
        expect(ship.previousPort).toEqual(null)
    })
})

describe('sail method', () => {
    const dover = new Port('Dover')
    const calais = new Port('Calais')
    const channelCrossing = new Itinerary(dover, calais)
    const ship = new Ship(channelCrossing)
    const ship2 = new Ship(channelCrossing)
    it('updates the current location of the ship to show the ship is at sea', () => {
        expect(ship.currentLocation).toBe(dover)
        ship.sail()
        expect(ship.currentLocation).toEqual('at sea')
    })
    it('sets the previous port property to the current port', () => {
        expect(ship.previousPort).toEqual(dover)
    })
    it('throws an error if you try to sail beyond the last destination', () => {
        ship2.sail()
    ship2.dock()
        expect(ship2.currentLocation).toEqual(calais)
        expect( () => {
            ship2.sail()
            ship2.dock()
            ship2.sail()
        }).toThrow()
    })
})

describe('dock method', () => {
    const dover = new Port('Dover')
    const calais = new Port('Calais')
    const beyond = new Port('Beyond')
    const channelCrossingAndBeyond = new Itinerary(dover, calais, beyond)
    const braveShip = new Ship(channelCrossingAndBeyond)
    it('reassigns the current location to a new Dock', () => {
        expect(braveShip.currentLocation).toEqual(dover)
        braveShip.sail()
       braveShip.dock()
       expect(braveShip.currentLocation).toEqual(calais)
       braveShip.sail()
       braveShip.dock()
       expect(braveShip.currentLocation).toEqual(beyond)
    })
    })
    
