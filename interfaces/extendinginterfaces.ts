interface Exterior {
    color: string;
    numofDoors: number;
}

interface Interior {
    seats: number;
    auto: boolean;
}

interface Car extends Exterior, Interior {
    make: string;
    model: string;
    year: number;
}

var myCar: Car = {
    make: 'Mitsubishi',
    model: 'Outlander',
    year: 2009,
    color: 'black',
    numofDoors: 5,
    seats: 5,
    auto: true
}


interface Book {
    title: string;
    isbn: string;
    description: string;
    price: number;
}

var book: Book = {
    title: 'Pinnocio',
    isbn: '333-333-333',
    description: 'Child book',
    price: 10
}