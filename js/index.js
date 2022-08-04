// Iteration 1: Names and Input
const hacker1 = "Felix"; //they are cats
const hacker2 = "Fargo";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length == hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}
if (hacker1.length > hacker2.length) {
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
  //console.log(hacker1.charAt(i));
  separated = separated + hacker1[i].toUpperCase();
  if (i != hacker1.length - 1) {
    //console.log(i);
    separated = separated + " ";
  }
}

console.log(
  `Driver name length:${hacker1.length} - Result length: ${separated.length} - Result: ${separated}`
);

// solution for 3.2
let reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}
console.log(reversed);

// solution for 3.3
const driver = "The driver's name goes first.",
  navigator = "Yo, the navigator goes first definitely.",
  sameName = "What?! You both have the same name?";

let x = hacker1.localeCompare(hacker2);
if (x === 0) {
  sameName;
  console.log(sameName);
} else if (x === 1) {
  console.log(navigator);
} else {
  console.log(driver);
}
//**********************************
// A more detailed solution to 3.3
let longerName = 0;
console.log(hacker1, hacker2);
// Check if both names are the same!
if (hacker1 === hacker2) {
  console.log(sameName);
  return sameName;
} else {
  //If not same, get the longer Name
  if (hacker1.length >= hacker2.length) {
    console.log(hacker1.length > hacker2.length);
    longerName += hacker1.length;
  } else {
    longerName += hacker2.length;
  }
  //Iterate and Compare
  for (let i = 0; i < longerName; i++) {
    console.log(hacker1[i]);
    console.log(hacker2[i]);
    if (hacker1[i] <= hacker2[i]) {
      console.log(driver);
      break;
    } else {
      console.log(navigator);
      break;
    }
  }
}
//
// :: SIDE NOTES :: Please correct me if I'm somewhere wrong =>
console.log("abc" < "abf"); // true
console.log("a" < "A");
console.log("a" > "e");
console.log("Hello" > "hello");
console.log("Felix" > "Fargo");
// JS compares Lexicographically by "<" ">" and the character ASCII Value. (lookup ASCII table from internet)
// :: END OF SIDE NOTES :: =>
// This is a more Practical Solution 🙃
/* if (hacker1 === hacker2) {
  console.log(sameName);
  return sameName;
} else if (hacker1 > hacker2) {
  console.log(navigator);
  return navigator;
} else {
  console.log(driver);
  return driver;
}*/

// BONUS 1 ToDo :
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum tellus quis eros viverra, eget cursus libero placerat. Curabitur at dolor venenatis, vehicula ante vel, vehicula libero. Mauris a eros in velit mattis euismod. Sed varius dapibus posuere. Donec id faucibus est. Vivamus ac libero quis mi tempor elementum. Vestibulum pellentesque erat id congue ultrices.

Suspendisse potenti. Nullam fermentum, leo et aliquet commodo, dui urna sollicitudin enim, sit amet tempus dolor ex quis orci. Aliquam volutpat ut lectus interdum lobortis. Vestibulum sit amet leo quam. Duis in augue et odio euismod tempus sit amet quis nunc. Maecenas id eros laoreet, mollis justo ac, pretium metus. Duis et metus eget nibh fermentum consectetur sed non nibh. Pellentesque lacinia semper sapien, nec luctus turpis dapibus at. Sed sodales posuere eros in finibus. Nunc pretium arcu id nisi malesuada, a tincidunt nunc ultrices. Vivamus interdum mi non sem fringilla, id vehicula mauris malesuada. Vivamus placerat volutpat neque id pulvinar. Praesent scelerisque sapien sed pellentesque facilisis.

Mauris arcu neque, interdum vitae justo ac, mollis porta tortor. Mauris varius tortor at tempor pretium. Praesent ornare odio eget ipsum sodales, eget finibus ante egestas. Sed sollicitudin ut risus id aliquam. Maecenas pulvinar vehicula ipsum non maximus. Etiam placerat, ex bibendum feugiat eleifend, orci ante egestas ex, in eleifend risus neque in eros. Praesent eros ligula, convallis a iaculis a, interdum et diam. Phasellus ut nibh sagittis, varius ipsum sed, pretium mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eleifend libero eget ipsum hendrerit sollicitudin. Aenean quis ullamcorper sem. Etiam scelerisque ex velit, in feugiat nisl imperdiet id. Fusce porttitor, diam ac cursus accumsan, nulla lorem finibus turpis, sed tempus ligula leo feugiat eros. Phasellus porttitor sed purus id pretium.`;
/*
let text = [];
let words = ""; 
const wordCount = (str) => {
  for (let i = 0)
}
*/

/*const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu felis, porttitor et nulla ac, accumsan lobortis massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi augue sem, dictum quis risus nec, luctus tempor dolor. Cras tortor turpis, varius malesuada vestibulum porttitor, placerat eu nibh. Sed sed dignissim nisl. Curabitur condimentum sapien vitae pellentesque facilisis. Morbi mollis maximus arcu quis luctus. Quisque urna odio, condimentum non rutrum non, consectetur sed est. Quisque commodo enim est, ac fringilla dui aliquet quis. Nulla facilisi.
Morbi sit amet pulvinar sem, a iaculis libero. Sed sodales, diam vel finibus dapibus, libero lectus vulputate magna, eget faucibus nisi justo ut nisi. Ut et libero ornare, gravida magna sit amet, viverra odio. Curabitur sit amet erat sed massa pulvinar posuere. Ut dolor risus, ultricies quis libero eu, efficitur tempus tortor. Nulla sem erat, varius vitae fringilla consectetur, tincidunt fringilla lacus. Quisque in lacinia neque. Cras id consectetur metus. Etiam venenatis ipsum non ex semper, non pulvinar tellus sollicitudin.
Nulla facilisi. Aliquam erat volutpat. Mauris at gravida urna. Suspendisse in ligula faucibus, elementum magna a, convallis nunc. Nulla pharetra dolor id tellus dictum pretium. Proin id purus scelerisque, consectetur ante eget, ultrices risus. Aenean vel dolor auctor, malesuada magna nec, maximus augue. Sed pretium sapien a suscipit consequat. Donec convallis massa tellus, eget pretium dui consequat ut. Mauris eget egestas purus.`;
*/
console.log(lorem.length);

const myFunction = (str) => {
  const textLength = str.length;
  let text = [],
    word = "";
  for (let i = 0; i < textLength; i++) {
    //console.log(str[i])
    if (str[i] !== " ") {
      word += str[i];
    } else {
      text.push(word);
      word = "";
      text;
    }
  }
  return text.length;
};

//var re = /,|\s*/g;
//console.log(loremIpsum.split(/\W/g))

//console.log(mySplitFunction("Artur"))

console.log(myFunction(lorem));
console.log(myFunction("Hat a ad "));

//Bonus 1 point 3, counting "et" in lorem string.
const loremLength = lorem.length;
let etOccurance = 0;
for (let i = 0; i < loremLength; i++) {
  console.log(etOccurance);
  if (i === "e" && i + 1 === "t") {
    etOccurance += etOccurance[i];
  }
}

console.log(etOccurance);
