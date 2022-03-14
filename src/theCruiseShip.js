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

    dock (newPort) {
        if(this.previousPort===this.itinerary.ports[this.itinerary.ports.length-2]) {
            this.currentLocation = this.itinerary.ports[this.itinerary.ports.length-1]
            console.log('You have reached your destination!')
        }
            this.currentLocation = this.itinerary.ports[this.itinerary.ports.indexOf(this.previousPort)+1]
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