const {Ship, Port, Itinerary} = require('../src/theCruiseShip')

describe('itinerary constructor', () => {
    it('creates an instance of an itinerary which is an object', () => {
        const dover = new Port('Dover')
        const calais = new Port('Calais')
        const itinerary = new Itinerary(dover, calais)
        expect(itinerary).toBeInstanceOf(Object)
        expect(itinerary).toHaveProperty('ports')
        expect(itinerary.ports).toEqual(expect.arrayContaining([dover, calais]))
    })
})
