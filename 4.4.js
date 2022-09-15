function Electronics(works){
    this.works = works
}
function Lamp(name, Vt){
    this.name = name
    this.power = Vt
}

function Comp(name, Vt, type){
    this.name = name
    this.power = Vt
    this.type = type
}

Electronics.prototype.switch = function (){
    if (this.works){
        this.works = false
        console.log(`${this.name} выкл`)
    }
    else {
        this.works = true
        console.log(`${this.name} вкл`)
    }
}

Electronics.prototype.powerInHour = function (){
    console.log(`${this.name} потребляет ${this.power / 1000} кВт/чвс`)
}

Lamp.prototype = new Electronics(true)
Comp.prototype = new Electronics(true)

Lamp.prototype.info = function (){
    if (this.works)
        console.log(`Это ${this.name}\nОна включена\nЕе энергопотребление равно ${this.power / 1000} кВт/чвс`)
    else
        console.log(`Это ${this.name}\nОна выключена\nЕе энергопотребление равно ${this.power / 1000} кВт/чвс`)
}

const lampOne = new Lamp("Первая лампа", 60)
const lampTwo = new Lamp("Вторая лампа", 95)

const compOne = new Comp('Первый компьютер', 100, 'ПК')
const compTwo = new Comp('Второй компьютер', 80, 'Ноутбук')

console.log(lampOne.works)
lampOne.switch()
lampTwo.switch()
lampOne.info()
compTwo.powerInHour()
compOne.powerInHour()