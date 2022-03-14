const {Ship, Port, Itinerary} = require('../src/theCruiseShip')

describe('Port constructor', () => {
    const port = new Port('Southampton')
    it('creates a new object', () => {
        expect(port).toBeInstanceOf(Object)
    })
    it('sets the port name from the given argument', () => {
        expect(port.name).toEqual('Southampton')
    })
})
