class Ship {
    constructor (itinerary) {
        this.itinerary = itinerary
        this.currentLocation = itinerary.ports[0]
        this.previousPort = null
    }
    

   sail () {
        this.previousPort = this.currentLocation
        this.currentLocation = 'at sea'
    }

    dock () {
        const portArray = this.itinerary.ports
        const secondToLastPort = portArray[portArray.length-2]
        const destinationPort = portArray[portArray.indexOf(this.previousPort)+1]
        if(this.previousPort=== secondToLastPort) {
            this.currentLocation = destinationPort
            console.log(`Welcome to ${destinationPort.name}, this is your final destination!`)
        } else {
            this.currentLocation = destinationPort
            console.log(`Welcome to ${destinationPort.name}!`)}
            //need to refactor - add variables so destination of values doesn't have to be repeatedly typed
        
    }
}

class Port {
    constructor (name) {
        this.name = name
    }
}

class Itinerary {
    constructor (port1, port2, port3) {
        this.ports = new Array (port1, port2, port3)
    }
}
module.exports = {Ship, Port, Itinerary}