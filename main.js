// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write an example of using the function.

function max (num1, num2) {
  if (num1 > num2) {
    return (num1);
  } else {
    return num2;
  }
}

console.log(max(35, 68));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.
/*
function maxOfThree (numberA, numberB, numberC)
if (numberA > numberB) {
   return numberA;
} else { //
  return numberB;
}
if (numberC > numberA) {
  return numberC;
} else {
  return numberA;
}
if (numberB > numberC) {
  return numberB;
} else {
  return numberC;
}
} //

console.log(maxOfThree(2, 3, 67)); */

function maxOfThree(num1, num2, num3) {
  if (num2 > num1) {
  max = num2;
} else {
  max = num1;
}

if (max < num3) {
  max = num3;
} else {
  return max;
}
}


console.log(maxOfThree(333, 18, 6));



// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
}

console.log(isVowel('s'));



// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum (addition1, addition2) {
  return addition2 + addition1;
}

console.log(sum(67, 3));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg (norm1, norm2, norm3) {
  return ((norm1 + norm2 + norm3) / 3)
}

console.log(avg(15, 30, 20));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength (measure) {
  return measure;
}

console.log(getLength('12 feet'));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan (valueD, valueR) {
  if (valueD < valueR) {
    return true;
  } else {
    return false;
  }
}

console.log(greaterThan(40, 39));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function great (me) {
  return ("Hello " + me + "!")
}

console.log(great("Johnni"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madLib (wordE, wordT, wordU, wordP) {
  return ("I " + wordE + " yesterday, but immediately " + wordT + ". " + wordU + " is not " + wordP + ".");
}

console.log(madLib('ate oysters', 'regretted it', 'Eating old, raw oyesters', 'advisable'));
