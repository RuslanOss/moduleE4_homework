function Appliance(name, plugged){
    this.name = name,
        this.plugged = plugged,
        this.calcWattage = function (kilowatts, hours) {
            let kwh = kilowatts * hours / 1000
            console.log(`${this.name} is using ${kwh}kWh/day`)
        },
        this.plug = function() {
            this.plugged = "plugged in"
            console.log(`${this.name} is ${this.plugged}`)
        },
        this.unplug = function() {
            this.plugged = "unplugged"
            console.log(`${this.name} is ${this.plugged}`)
        }
}

function LampAppliance(name, color) {
    this.name = name,
        this.color = color,
        this.describe = function() {
            console.log(`${this.name} is ${this.color}`)
        }
}

LampAppliance.prototype = new Appliance

function ComputerAppliance(name, architechture) {
    this.name = name,
        this.architechture = architechture,
        this.arch = function() {
            console.log(`${this.name} is using ${this.architechture} architechture`);
        }
}

ComputerAppliance.prototype = new Appliance

const lamp = new LampAppliance("Table Lamp", "red")
const pc = new ComputerAppliance("My computer", "x86_64")

lamp.calcWattage(40, 24)
lamp.unplug()
lamp.describe()
pc.plug()
pc.calcWattage(300, 8)
pc.arch()
