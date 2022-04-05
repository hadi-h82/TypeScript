const charc = 'mahdi';
console.log(charc);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    console.log(input);
})

////////////////////////////////////////

let fname = "hadi";
let age = 30;
let isMale = true;

//fname = 26;
fname = 'bahram';

//age = "mahdi";
age = 7;

// isMale = 1;
// isMale = "false";
isMale = false;

/////////////////////////////////////////

const circ = (diameter: number) => {
    return diameter * Math.PI;
}
console.log(circ(2.5));

////////////////////////////////////////////

// Arrays


let names = ["mahdi", "ali", "nima"];

// names = "gira";
// names[1] = 24;
names.push('atefe');
names[2] = "atefe";
/////////////////////////////////////////
let numbers = [10, 20, 30, 40];

let mixed = [10, 15, 'mahdi', 23, "reza"];

// mixed[3] = true;
// mixed = {};
mixed[0] = 'mahdi';

////////////////////////////////////////////

// Objects

let person = {
    name: "reza",
    age: 25,
    isMale: true
};

// person = [];
// person.name = 10;
// person.phone

person = {
    name: "ali",
    age: 18,
    isMale: false
}

/////////////////////////////////////////


//explicit types

let fname1: string;
let age1: number;
let isMale1: boolean;
// age1 = 'reza';
age = 20;


// array 

let numbers1: number[] = [];
numbers1[0] = 20;
// numbers1[1] = 'reza';
numbers1.push(2);


//union types

let mixed1: (number|string|boolean)[] = [];

mixed1.push(2);
mixed1.push('ali');
mixed1.push(true);


let uid: string|number;
uid = "123";
uid = 123;


// Objects

let personOne : object;

personOne = {name: 'javad', age: 25};
personOne = [];

let personTwo: {
    name: string,
    age: number,
    isMale: boolean
}

personTwo = {
    name: 'nima',
    age: 25,
    isMale:true,
    // phone: 123
}

/////////////////////////////////////////////////////


let age2: any;

age2 = 25;
console.log(age2);

age2 = 'mahdi';
console.log(age2);

age2 = true;
console.log(age2);

////////////////////////////////////////////////////


let mixed2: any[] = [];

mixed2.push(25);
mixed2.push('gaga');
mixed2.push(false);

console.log(mixed2);

/////////////////////////////////////////////////////

let person2: {name: any, age: any};

person2 = {name: 'ali', age: 25}; 
console.log(person2);

person2 = {name: 25, age: 'mahdi'};
console.log(person2);

/////////////////////////////////////////////////////

// Function 

let greet = () => {
    console.log('Hello');
}

// greet = 23;

//-----------------------------------------

let greet1: Function;

greet1 = () => {
    console.log('Hello, World');
}

greet1();

//-------------------------------------------

let sayHello = (fname2:string) => {
    console.log('Hello', fname2);
}

let add = (a: number, b: number) => {
    return a+b;
}

let result = add(12, 2);
console.log(result);

console.log(add(5, 7));

let sub = (a: number, b: number) => {
    return a-b;
}
//  let result1: string;
 let result1: number;
 result1 = sub(5, 2);

//-----------------------------------------------

let sub1 = (a: number, b: number, c: number | string = 5) : number => {
    console.log(c);
    return a-b;
}

sub1(2, 1);
sub1(2, 1, 6);

/////////////////////////////////////////////////////////////////

// Type Aliases
type s = string;
type n = number;
type sn = string|number;
type snb = string | number | boolean;

type arrayType = (string | number | boolean);

type objectType = {
    name: string,
    uid: string | number
};

// string - number - boolean

let fName : s;
let age3 : n;
let isMale2 : boolean;
let mixed3 : s | n;
let mixed4 : snb;

let mixed5 : string | number | boolean;


//array

let arr : arrayType[] = [];

arr.push(12);
arr.push('mahdi');
arr.push(true);

console.log(arr);

//object

let user : objectType;

user = {name: 'mahdi', uid: '24'};

console.log(user);


//Function

let sayHello1 = (name: s, age: n, phone: sn) => {
    console.log(`hi my name is ${name} and im ${age} years old`);
}

sayHello1('mahdi', 20, 123);
sayHello1('bahram', 32, '321');


let greet2 = (user: objectType) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
}

greet2({name: 'mahdi', uid: 123});
greet2({name: 'bahram', uid: '123'});

///////////////////////////////////////////////////////////

// classes

class Invoice {
    
    // public client: string;
    // private details: string;
    // readonly amount: number;
  
    // constructor(c: string, d: string, a: number){
    //     this.client = c;A
    //     this.details = d;
    //     this.amount = a;
    // }
  
    constructor(
      public client: string,
      private details: string,
      readonly amount: number
    ) {}
  
    format() {
      return `${this.client} owes ${this.amount} for ${this.details}`;
    }
  }
  
  const invOne = new Invoice("mahdi", "work in the website", 250);
  const invTwo = new Invoice("reza", "work in the bigger website", 450);
  
  console.log(invOne);
  console.log(invOne.format());
  console.log(invTwo);
  console.log(invTwo.format());
  
  let Invoices: Invoice[] = [];
  
  Invoices.push(invOne);
  Invoices.push(invTwo);
  
  console.log(Invoices);
  
  for (let inv of Invoices){
      console.log(inv.client);
      // console.log(inv.details); -->private
      console.log(inv.amount);
  }
  
  console.log(invOne.format());





















































