const {Ship, Port, Itinerary} = require('../src/theCruiseShip')

describe('itinerary constructor', () => {
    it('creates an instance of an itinerary which is an object', () => {
        const dover = jest.fn()
        const calais = jest.fn()
        const itinerary = new Itinerary(dover, calais)
        expect(itinerary).toBeInstanceOf(Object)
        expect(itinerary).toHaveProperty('ports')
        expect(itinerary.ports).toEqual(expect.arrayContaining([dover, calais]))
    })
})
