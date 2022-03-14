class Ship {
    constructor (itinerary) {
        this.itinerary = itinerary
        this.currentLocation = itinerary.ports[0]
        this.previousPort = null
    }
    

   sail () {
    const portArray = this.itinerary.ports
    const lastPort = portArray[portArray.length-1]
        if (this.currentLocation === lastPort) {
            throw 'No more sailing, you are at your destination.'
        }else{
        this.previousPort = this.currentLocation
        this.currentLocation = 'at sea'
    }
    }

    dock () {
        const portArray = this.itinerary.ports
        const lastPort = portArray[portArray.length-1]
        const secondToLastPort = portArray[portArray.length-2]
        const destinationPort = portArray[portArray.indexOf(this.previousPort)+1]
        if (this.currentLocation === lastPort) {
            throw new Error ('No more sailing, you are at your destination.')
        }else 
        if(this.previousPort=== secondToLastPort) {
            this.currentLocation = destinationPort
            console.log(`Welcome to ${destinationPort.name}, this is your final destination!`)
        } else {
            this.currentLocation = destinationPort
            console.log(`Welcome to ${destinationPort.name}!`)}
                    
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