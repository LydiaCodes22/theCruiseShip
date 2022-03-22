/* eslint-disable no-undef */
const { Itinerary } = require('../src/itinerary');

describe('itinerary constructor', () => {
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    dover = jest.fn();
    calais = jest.fn();
    itinerary = new Itinerary(dover, calais);
  });
  it('creates an instance of an itinerary which is an object', () => {
    expect(itinerary).toBeInstanceOf(Object);
  });
  it('has a ports property which contains an array of ports', () => {
    expect(itinerary).toHaveProperty('ports');
    expect(itinerary.ports).toEqual(expect.arrayContaining([dover, calais]));
  });
});
