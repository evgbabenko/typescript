class TouchScreenLaptop {
    ram: number;
    hd: string;
    processor: string;

    scroll() {
        console.log('Scrolled');
    }

    click() {
        console.log('Clicked');
    }

    constructor(ram: number, hd: string, procssor: string) {
        this.ram = ram;
        this.hd = hd;
        this.processor = procssor;
    }
}

class HPLaptop extends TouchScreenLaptop {
    selfRecovery: boolean;
    scroll() {
        console.log('HP scrolled');
    }
    setSelfRecovery(){
        this.selfRecovery = !this.selfRecovery;
    }
    constructor(ram: number, hd: string, processor: string, selfRecovery: boolean) {
        super(ram, hd, processor);
        this.selfRecovery = selfRecovery
    }
    display() {
        for (let item in this) {
            if (this[item] instanceof Function) {
                continue;
            } else {
                console.log(`${item}: ${this[item]}`)
            }
        }
    }
}

class DellLaptop extends TouchScreenLaptop {
    mobileAccess: boolean;
    scroll() {
        console.log('Dell scrolled');
    }
    setMobileAccess() {
        this.mobileAccess = !this.mobileAccess;
    }
    constructor(ram: number, hd: string, processor: string, mobileAccess: boolean) {
        super(ram, hd, processor);
        this.mobileAccess = mobileAccess
    }
    display() {
        for (let item in this) {
            if (this[item] instanceof Function) {
                continue;
            } else {
                console.log(`${item}: ${this[item]}`)
            }
        }
    }
}

var hp = new HPLaptop(1024, '1TB', 'Celeron', true);
hp.display();

var dell = new DellLaptop(2048,'2Tb','AMD', false);
dell.display();
dell.setMobileAccess();
dell.display();