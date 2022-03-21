/* eslint-disable no-undef */
const {Ship, Port, Itinerary} = require('../src/theCruiseShip')

describe('cruise ships with ports and itinerary', () => {
    let dover
    let calais
    let beyond
    let channelCrossingAndBeyond
    let ship
    

    beforeEach (()=> {
    dover = new Port('Dover')
    calais = new Port('Calais')
    beyond = new Port('Beyond')
    channelCrossingAndBeyond = new Itinerary(dover, calais, beyond)
    ship = new Ship (channelCrossingAndBeyond)
    
}) 

    it('can be instantiated and returns an object', () => {
        expect(ship).toBeInstanceOf(Object)
    })
    it('has a starting port', () => {
        expect(ship.currentLocation).toBe(dover)
    })
    it('has a previous port property which is set to null', () => {
        expect(ship.previousPort).toEqual(null)
    })

    it('can set sail and updates the current location of the ship to show the ship is at sea', () => {
        expect(ship.currentLocation).toBe(dover)
        ship.sail()
        expect(ship.currentLocation).toEqual('at sea')
    })
    it('sets the previous port property to the current port when it sails', () => {
        ship.sail()
        expect(ship.previousPort).toEqual(dover)
    })
    it('throws an error if you try to sail beyond the last destination', () => {
        ship.sail()
    ship.dock()
        expect(ship.currentLocation).toEqual(calais)
        expect( () => {
            ship.sail()
            ship.dock()
            ship.sail()
        }).toThrow()
    })
    it('reassigns the current location to a new Dock when it docks', () => {
        expect(ship.currentLocation).toEqual(dover)
        ship.sail()
       ship.dock()
       expect(ship.currentLocation).toEqual(calais)
       ship.sail()
       ship.dock()
       expect(ship.currentLocation).toEqual(beyond)
    })
    })
    