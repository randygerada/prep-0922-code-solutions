const person = {
  firstName: 'Randy',
  lastName: 'Gerada',
  hobby: 'Lifting'
};
console.log(person);

person.fullName = person.firstName + ' ' + person.lastName;
var statement1 = "this person's name is: " + person.fullName;
console.log(statement1);

person.Job = 'Underwater Basket Weaver';
var statement2 = "this person's job is: " + person.Job;
console.log(statement2);

person.PreviousJob = 'Ex Valorant Pro';
var statement3 = "this person's previous job was: " + person.PreviousJob;
console.log(statement3);

var statement4 = 'the complete person object: '; console.log(statement4); console.log(person);
