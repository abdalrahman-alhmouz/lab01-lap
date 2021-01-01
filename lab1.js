var name = prompt("what is your name ?");
 function Person() {
alert("hello " + name ); }

console.log(Person);
Person()

function city() {
    var contry = prompt("where are you from ?");
alert("Greetings  " + name +"  from "+ contry + " it is nice place " );
}
console.log(city) ;
city() 
function football() {
var sport = prompt(" What is your favorite football team ?") ;
alert("nice " + sport + "  is a strong team" );
}
console.log(football) ;
football()
function dangeros() {
var smok = prompt("do you smoke ?(yes or no)").toLowerCase(smok);
switch (smok) {
    case 'yes':
        alert("I hope you, "+ name + " will quit smoking one day");
        break;
    case 'no':
        alert('This is good, '+ name + ' .  continue like this because as you know smoking is harmful to health');
        break;

} }
console.log(dangeros) ;
dangeros()