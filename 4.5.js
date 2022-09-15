class Electronics {
    constructor(name, works, Vt) {
        this.name = name;
        this.works = works;
        this.power = Vt;
    }
    switch(){
        if (this.works){
            this.works = false
            console.log(`${this.name} выкл`)
        }
        else {
            this.works = true
            console.log(`${this.name} вкл`)
        }
    }
    info(){
        if (this.works)
            console.log(`Это ${this.type} ${this.name}\nОна включена\nЕе энергопотребление равно ${this.power / 1000} кВт/чвс`)
        else
            console.log(`Это ${this.type} ${this.name}\nОна выключена\nЕе энергопотребление равно ${this.power / 1000} кВт/чвс`)
    }
    powerInHour(){
        console.log(`${this.name} потребляет ${this.power / 1000} кВт/чвс`)
    }
}

class Lamp extends Electronics{
    constructor(name, Vt, bool, type, price) {
        super(name, bool, Vt)
        this.name = name;
        this.type = type;
        this.price = price;
    }
    infoPrice(){
        console.log(`${this.type} ${this.name} стоит ${this.price}р`)
    }
}

class Comp extends Electronics{
    constructor(name, Vt, bool, type, price, system) {
        super(name, bool, Vt)
        this.name = name;
        this.type = type;
        this.price = price;
        this.system = system;
    }
    infoPrice(){
        console.log(`${this.type} ${this.name} стоит ${this.price}р`)
    }
    systemInfo(){
        console.log(`На этом ${this.type} стоит ${this.system}`)
    }
}

const lampOne = new Lamp('лампа', 60, true, 'настольна', 1000)
const CompOne = new Comp('компьютер', 100, false, 'ПК', 15000, 'windows')
const CompTwo = new Comp('компьютер', 80, false, 'ноутбук', 25000, 'linux')


lampOne.switch()
lampOne.switch()
lampOne.infoPrice()
lampOne.info()

CompOne.switch()
CompOne.switch()
CompOne.infoPrice()
CompOne.systemInfo()
CompOne.info()

CompTwo.switch()
CompTwo.switch()
CompTwo.infoPrice()
CompTwo.systemInfo()
CompTwo.info()