interface StudentName{
    [index:number]:string;
}

var studentNames:StudentName =['John','Bob','Doug'];


interface StudentScore{
    [index:string]:number;
}

var studentScore: StudentScore ={};
studentScore['John'] = 100;
studentScore['Bob'] = 90;
