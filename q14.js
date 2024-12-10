// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/

const object1 = {
  ali: "name",
  writes: "does what",
  novels: "kind of book",
};

const firstWay = Object.values(object1);

const allValues = [];
for (values in object1) {
  allValues.push(object1[values]);
}
console.log(allValues);
