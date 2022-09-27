var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TouchScreenLaptop = /** @class */ (function () {
    function TouchScreenLaptop(ram, hd, procssor) {
        this.ram = ram;
        this.hd = hd;
        this.processor = procssor;
    }
    TouchScreenLaptop.prototype.scroll = function () {
        console.log('Scrolled');
    };
    TouchScreenLaptop.prototype.click = function () {
        console.log('Clicked');
    };
    return TouchScreenLaptop;
}());
var HPLaptop = /** @class */ (function (_super) {
    __extends(HPLaptop, _super);
    function HPLaptop(ram, hd, processor, selfRecovery) {
        var _this = _super.call(this, ram, hd, processor) || this;
        _this.selfRecovery = selfRecovery;
        return _this;
    }
    HPLaptop.prototype.scroll = function () {
        console.log('HP scrolled');
    };
    HPLaptop.prototype.display = function () {
        for (var item in this) {
            if (this[item] instanceof Function) {
                continue;
            }
            else {
                console.log("".concat(item, ": ").concat(this[item]));
            }
        }
    };
    return HPLaptop;
}(TouchScreenLaptop));
var DellLaptop = /** @class */ (function (_super) {
    __extends(DellLaptop, _super);
    function DellLaptop(ram, hd, processor, mobileAccess) {
        var _this = _super.call(this, ram, hd, processor) || this;
        _this.mobileAccess = mobileAccess;
        return _this;
    }
    DellLaptop.prototype.scroll = function () {
        console.log('Dell scrolled');
    };
    DellLaptop.prototype.setMobileAccess = function () {
        this.mobileAccess = !this.mobileAccess;
    };
    DellLaptop.prototype.display = function () {
        for (var item in this) {
            if (this[item] instanceof Function) {
                continue;
            }
            else {
                console.log("".concat(item, ": ").concat(this[item]));
            }
        }
    };
    return DellLaptop;
}(TouchScreenLaptop));
var hp = new HPLaptop(1024, '1TB', 'Celeron', true);
hp.display();
var dell = new DellLaptop(2048, '2Tb', 'AMD', false);
dell.display();
dell.setMobileAccess();
dell.display();
