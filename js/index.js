// Iteration 1: Names and Input
const hacker1 = "Fargo"; //they are cats
const hacker2 = "Felix";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length == hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}
// Iteration 3: Loops
// Solution for 3.1

let separated = "";
for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1.charAt(i));
  separated = separated + hacker1[i].toUpperCase();
  if (i != hacker1.length - 1) {
    console.log(i);
    separated = separated + " ";
  }
}

console.log(
  `Driver name length:${hacker1.length} - Result length: ${separated.length} - Result: ${separated}`
);
