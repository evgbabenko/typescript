class COrganize {
    private _id: number;
    private _name: string;

    set id(id: number) {
        this._id = id;
    }

    set name(name: string) {
        this._name = name;
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }
}

class CEvent {
    private _id: number;
    private _name: string;
    private _description: string;
    private _starttime: string;
    private _endtime: string;

    set id(id: number) {
        this._id = id;
    }

    set name(name: string) {
        this._name = name;
    }

    set description(description: string) {
        this._description = description;
    }

    set starttime(starttime: string) {
        this._starttime = starttime;
    }

    set endtime(endtime: string) {
        this._endtime = endtime;
    }
    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get description(){
        return this._description;
    }

    get starttime(){
        return this._starttime;
    }

    get endtime(){
        return this._endtime;
    }

}

class CVenue {
    private _id: number;
    private _name: string;
    private _description: string;
    private _address: string;

    set id(id: number) {
        this._id = id;
    }

    set name(name: string) {
        this._name = name;
    }

    set description(description: string) {
        this._description = description;
    }

    set address(address: string) {
        this._address = address;
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get description(){
        return this._description;
    }

    get address(){
        return this._address;
    }
}