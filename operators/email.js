var email = 'testtest.com';
var atposition = email.indexOf('@');
var dotposition = email.indexOf('.');
if (atposition == -1 || dotposition == -1) {
    console.log('invalid email');
}
else {
    console.log('email is valid');
}
