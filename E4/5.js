class Appliance {
    constructor(name, plugged) {
        this.name = name
        this.plugged = plugged
    }
    calcWattage (kilowatts, hours) {
        let kwh = kilowatts * hours / 1000
        console.log(`${this.name} is using ${kwh}kWh/day`)
    }
    plug () {
        this.plugged = "plugged in"
        console.log(`${this.name} is ${this.plugged}`)
    }
    unplug () {
        this.plugged = "unplugged"
        console.log(`${this.name} is ${this.plugged}`)
    }
}

class LampAppliance extends Appliance {
    constructor(name, color) {
        super()
        this.name = name
        this.color = color
    }
    describe () {
        console.log(`${this.name} is ${this.color}`)
    }
}

class ComputerAppliance extends Appliance {
    constructor(name, architechture) {
        super()
        this.name = name
        this.architechture = architechture
    }
    arch () {
        console.log(`${this.name} is using ${this.architechture} architechture`)
    }
}

const lamp = new LampAppliance("Table Lamp", "red")
const pc = new ComputerAppliance("My computer", "x86_64")

lamp.calcWattage(40, 24)
lamp.unplug()
lamp.describe()
pc.plug()
pc.calcWattage(300, 8)
pc.arch()