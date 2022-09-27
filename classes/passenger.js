var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequencyFluerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequencyFluerNo = frequencyFluerNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + ' ' + this.lastName + ' ' + this.frequencyFluerNo);
    };
    return Passenger;
}());
var passenger = new Passenger('John', 'Bailey', 123);
var passenger2 = new Passenger('Bob', 'Marley', 123);
passenger2.display();
passenger.display();
for (var item in passenger) {
    if (passenger[item] instanceof Function) {
        continue;
    }
    else {
        console.log(item);
        console.log(passenger[item]);
    }
}
