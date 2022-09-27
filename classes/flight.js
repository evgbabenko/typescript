var COrganize = /** @class */ (function () {
    function COrganize(id, name) {
        this.id = id;
        this.name = name;
    }
    COrganize.prototype.display = function () {
        console.log("".concat(this.id, " ").concat(this.name));
    };
    return COrganize;
}());
var CEvent = /** @class */ (function () {
    function CEvent(id, name, description, starttime, endtime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }
    CEvent.prototype.display = function () {
        console.log("".concat(this.id, " ").concat(this.name, " ").concat(this.description, " ").concat(this.starttime, " ").concat(this.endtime));
    };
    return CEvent;
}());
var CVenue = /** @class */ (function () {
    function CVenue(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    CVenue.prototype.display = function () {
        console.log("".concat(this.id, " ").concat(this.name, " ").concat(this.address, " ").concat(this.description));
    };
    return CVenue;
}());
var _organize = new COrganize(1, 'John Doe');
var _event = new CEvent(1, 'John Doe', 'Happy time', '9pm', '9am');
var _venue = new CVenue(1, 'John Doe', 'Sunset beach', 'Brunswick County, North Carolina, United States');
_organize.display();
_event.display();
_venue.display();
