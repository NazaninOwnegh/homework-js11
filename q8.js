// ? 8. Use Array Destructuring to get all of the names from this Nested Array
// hint: Search about destructuring nested arrays.

const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

//! Answer :

const [x1, [y1, y2], [z1, z2]] = moreStudents;

console.log(x1);
console.log(y1);
console.log(y2);
console.log(z1);
console.log(z2);
