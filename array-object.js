

// Create an object with 10 different elements
let person = {
  name: "Daniel",
  age: 22,
  gender: "male",
  nationality: "Nigerian",
  occupation: "Developer",
  skill: "Web Dev",
  level: "Intermediate",
  city: "Enugu",
  hobby: "trading",
  language: "JavaScript"
};

// Delete two elements
delete person.hobby;
delete person.language;

// Add three new elements
person.maritalStatus = "Single"; 
person.interest = "Crypto";
person.favoriteColor = "Purple";

// Print the elements and length
console.log(person);
console.log("Total properties:", Object.keys(person).length);

// Create an array of 10 different numbers
let numbers = [3, 7, 12, 5, 9, 21, 4, 18, 10, 6];

//Delete the last two
numbers.pop();
numbers.pop();

// Change into an array of animals
numbers = ["Lion", "Elephant", "Dog", "Cat", "Tiger", "Giraffe", "Zebra", "Monkey"];
console.log(numbers);