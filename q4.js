// ? 4. Change two or more values of this object .
// todo : one of the values that you change must be the skills property // example: ['python', 'css', 'js']

const obj2 = {
  id: "kd455",
  age: 24,
  username: "john2000",
  skills: ["html", "css", "js"],
};

//  !   Answer:

let { id, age, username, skills } = obj2;

id = "nazanin";
age = 25;
skills = ["python", "css", "js"];
username = "nazaninownegh";

console.log(id, age, username, skills);
