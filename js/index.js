// Iteration 1: Names and Input 🎯
const hacker1 = "Felix"; //they are cats :)
const hacker2 = "Fargo";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals 🎯
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

// Solution for 3.1 🎯

let separated = "";
for (let i = 0; i < hacker1.length; i++) {
  //console.log(hacker1.charAt(i));
  separated = separated + hacker1[i].toUpperCase();
  if (i != hacker1.length - 1) {
    //console.log(i);
    separated = separated + " ";
  }
}
console.log(separated);
//console.log( `Driver name length:${hacker1.length} - Result length: ${separated.length} - Result: ${separated}`);

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

// :: SIDE NOTES :: Please correct me if I'm somewhere wrong =>
//console.log("abc" < "abf"); // true
//console.log("a" < "A");
//console.log("a" > "e");
//console.log("Hello" > "hello");
//console.log("Felix" > "Fargo");
// ??? JS compares Lexicographically by "<" ">" and the character ASCII Value. (lookup ASCII char value table from internet)
// ??? Please correct if this is false.
// :: END OF SIDE NOTES :: =>
// Solution with "<" ">" instead of .localCompare()
/*
if (hacker1 === hacker2) {
  console.log(sameName);
} else if (hacker1 > hacker2) {
  console.log(navigator);
} else {
  console.log(driver);
}
*/
/* *** Bonus one *** */
/* Generate 3 paragraphs. Store the text in a variable type of string 🎯 => */

/* 🤦 first i copy pasted all three paragraphs and got 2 words fewer, because there is no
whitespace between  linebreaks of paragraphs.
 take care of input Data. */
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum tellus quis eros viverra, eget cursus libero placerat. Curabitur at dolor venenatis, vehicula ante vel, vehicula libero. Mauris a eros in velit mattis euismod. Sed varius dapibus posuere. Donec id faucibus est. Vivamus ac libero quis mi tempor elementum. Vestibulum pellentesque erat id congue ultrices. Suspendisse potenti. Nullam fermentum, leo et aliquet commodo, dui urna sollicitudin enim, sit amet tempus dolor ex quis orci. Aliquam volutpat ut lectus interdum lobortis. Vestibulum sit amet leo quam. Duis in augue et odio euismod tempus sit amet quis nunc. Maecenas id eros laoreet, mollis justo ac, pretium metus. Duis et metus eget nibh fermentum consectetur sed non nibh. Pellentesque lacinia semper sapien, nec luctus turpis dapibus at. Sed sodales posuere eros in finibus. Nunc pretium arcu id nisi malesuada, a tincidunt nunc ultrices. Vivamus interdum mi non sem fringilla, id vehicula mauris malesuada. Vivamus placerat volutpat neque id pulvinar. Praesent scelerisque sapien sed pellentesque facilisis. Mauris arcu neque, interdum vitae justo ac, mollis porta tortor. Mauris varius tortor at tempor pretium. Praesent ornare odio eget ipsum sodales, eget finibus ante egestas. Sed sollicitudin ut risus id aliquam. Maecenas pulvinar vehicula ipsum non maximus. Etiam placerat, ex bibendum feugiat eleifend, orci ante egestas ex, in eleifend risus neque in eros. Praesent eros ligula, convallis a iaculis a, interdum et diam. Phasellus ut nibh sagittis, varius ipsum sed, pretium mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eleifend libero eget ipsum hendrerit sollicitudin. Aenean quis ullamcorper sem. Etiam scelerisque ex velit, in feugiat nisl imperdiet id. Fusce porttitor, diam ac cursus accumsan, nulla lorem finibus turpis, sed tempus ligula leo feugiat eros. Phasellus porttitor sed purus id pretium.`;
/* ***  */

//*Not the solution! Short function as blueprint and to compare results:
/*
 const counterLorem = (str) => str.split(" ").length;
 console.log(counterLorem(lorem));
 */
// Make your program count the number of words in the string. 🎯 =>
// More detailed solution 🎯 without fancy functions and methods, which does the same as the function above.

let words = 1; // Starts with one because we assume there is a word before first whitespace.
for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === " ") {
    words = words + 1;
  }
}
console.log(`The 3 paragraphs contain ${words} Words`);

/* *** */

//Count the "et" in lorem without special methods, solution 🎯 =>
let etOccurrence = 0;
for (let i = 0; i < lorem.length; i++) {
  //The condition should check for whitespaces before and after "e"+"t"
  if (
    lorem[i - 1] === " " && // Check for whitespace before "e"
    lorem[i] === "e" &&
    lorem[i + 1] === "t" &&
    lorem[i + 2] === " " // Check for whitespace after "t"
  ) {
    etOccurrence = etOccurrence + 1; //et++;
  }
}
console.log(` "et" occurs ${etOccurrence} times in the 3 paragraphs.`);

/* *** Bonus two - Palindrome checking - Keep it as Basic as possible? *** */
// I try to write simple code.
//const phraseToCheck = "stack cats".toLowerCase(),
const phraseToCheck = "No 'x' in Nixon".toLowerCase(),
  //const phraseToCheck = "Not, a palindrome!".toLowerCase(),
  phraseLength = phraseToCheck.length;
let cleanStr = "";
for (let i = 0; i < phraseLength; i++) {
  /*
   if (phraseToCheck[i] !== " ")
     if (phraseToCheck[i] !== "!")
       if (phraseToCheck[i] !== ",")
         if (phraseToCheck[i] !== "?")
           if (phraseToCheck[i] !== "'")
           console.log(phraseToCheck[i]) 
           Wow, this code block works, even without {}, but it's a mess.
           */
  switch (phraseToCheck[i]) {
    case " ":
    case "!":
    case ",":
    case "?":
    case "'":
      //console.log(phraseToCheck[i]); // log jumped over chars
      break;
    default:
      //console.log(phraseToCheck[i]);
      cleanStr = cleanStr + phraseToCheck[i];
    // continue; //redundant...
  }
  //console.log(phraseToCheck[i]);
}
//recycled codePart
let reversedPhrase = "";
for (let i = cleanStr.length - 1; i >= 0; i--) {
  reversedPhrase = reversedPhrase + cleanStr[i];
}
//console.log(reversedPhrase);
//console.log(cleanStr);
if (reversedPhrase == cleanStr) {
  console.log(`True. The phrase "${phraseToCheck}" is for sure a Palindrome!`);
} else {
  console.log(`False. The phrase "${phraseToCheck}" is not a Palindrome :(`);
}
