var email:string = 'testtest.com';
var atposition:number=email.indexOf('@');
var dotposition:number=email.indexOf('.');

if (atposition == -1 || dotposition == -1){
    console.log('invalid email')
}else{
    console.log('email is valid')
}