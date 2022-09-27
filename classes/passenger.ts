class Passenger {
    firstName: string;
    lastName: string;
    frequencyFluerNo: number;

    constructor(firstName: string, lastName: string, frequencyFluerNo: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequencyFluerNo = frequencyFluerNo;
    }
    display() {
        console.log(this.firstName + ' ' + this.lastName + ' ' + this.frequencyFluerNo);
    }
}

var passenger = new Passenger('John', 'Bailey', 123);


var passenger2 = new Passenger('Bob', 'Marley', 123);
passenger2.display();
passenger.display();

for (let item in passenger) {
    if (passenger[item] instanceof Function) {
        continue;
    } else {
        console.log(item);
        console.log(passenger[item]);
    }
}
