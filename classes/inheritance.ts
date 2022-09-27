class BMW {
    make: string;
    model: string;
    year: string;

    constructor(make: string, model: string, year: string) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    commonEngineFunc() {
        console.log('Common Func');
    }

    start() {
        console.log('Start');
    }

    stop() {
        console.log('Stop');
    }
}

class ThreeSeries extends BMW {
    cruiseControlEnable: boolean;
    
    cruiseControl(){
        this.cruiseControlEnable = true;
        console.log('Cruised')
    }

    constructor(make: string, model: string, year: string, cruiseControlEnable) {
        super(make, model, year);
        this.cruiseControlEnable = cruiseControlEnable;
    }
}

class FiveSeries extends BMW {
    parckignAssistEnable: boolean;

    parkingAssist(){
        this.parckignAssistEnable = true;
        console.log('Parked');
    }

    constructor(make: string, model: string, year: string, parckignAssistEnable) {
        super(make, model, year);
        this.parckignAssistEnable = parckignAssistEnable;
    }
}

var threeSeries = new ThreeSeries('BMW','328i','2018',false);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
console.log(threeSeries.cruiseControlEnable);
threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();


var fiveSeries = new FiveSeries('BMW','535','2018',false);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
console.log(fiveSeries.parckignAssistEnable);
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
