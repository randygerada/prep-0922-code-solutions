function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('The sum of the two numbers are:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var time = convertHoursToMinutes(2);
console.log('The conversion from hours to minutes equals: ', time);

function getGreeting(name) {
  var whole = 'Hello' + ' ' + name;
  return whole;
}

var fullPhrase = getGreeting('World');
console.log(fullPhrase);

function addAndMultiplyBy5(num1, num2) {
  return ((num1 + num2) * 5);
}

var total = addAndMultiplyBy5(10, 5);
console.log('10 plus 5, then multiplied by 5 gives you:', total);

function multiplyAndDivideBy5(num1, num2) {
  return ((num1 * num2) / 5);
}

var total2 = multiplyAndDivideBy5(35, 10);
console.log('35 multiplied by 10 then divided by 5 equals: ', total2);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var total3 = subtractTwoNumbers(22, 7);
console.log('22 minus 7 is: ', total3);

function getCircleCircumference(radius) {
  var r = 2 * 3.14159 * radius;
  return r;
}

var totalRadius = getCircleCircumference(5);
console.log('The circumference of the circle is: ', totalRadius);

function getFullName(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

var name = getFullName('Randy', 'Gerada');
console.log(name);

function cube(number) {
  var total4 = ((number) ^ 3);
  return total4;
}

var totalOfCube = cube(5);
console.log(totalOfCube);
