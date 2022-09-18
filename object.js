var ob1={
    l:'poo',
    n:89,
};
var ob2={
    l:'poo',
    n:89,
};
// ob.m=90;
// ob.n=56;
// point.n=undefined;
//console.log(ob1);
console.log(JSON.stringify( ob1)==JSON.stringify( ob2))
for(var i in ob1){
    console.log(ob1[i]);
}
console.log(Object.keys(ob1));
console.log(Object.values(ob1));
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    country: 'USA'
};


let employee = Object.assign(person, job);
console.log(employee);
const pers = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(pers.firstName);
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");