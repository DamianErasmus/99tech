// I assume the challenge is to create 3 different functions that will
// add consecutive numbers starting at one and ending at the received number.

// FIRST FUNCTION: Just using a simple for loop that runs for as long
// as the number received by the function.
function sum_to_n(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log("Answers of First Function:");
console.log("for number 5: " + sum_to_n(5));
console.log("for number 7: " + sum_to_n(7));
console.log("for number 10: " + sum_to_n(10));

// SECOND FUNCTION: Letting the function run itself in the function a
// number of times equal to the received number - 1, and adding that to
// the received number.
function sum2_to_n(n) {
  //Don't need to do anything if the number is 0 or 1
  if (n <= 1) {
    return n;
  }
  return n + sum2_to_n(n - 1);
}

console.log("Answers of Second Function:");
console.log("for number 5: " + sum2_to_n(5));
console.log("for number 7: " + sum2_to_n(7));
console.log("for number 10: " + sum2_to_n(10));

// THIRD FUNCTION: This function uses a math formula researched to find
// the first 'n' natural numbers, at puts it all in a single return call

function sum3_to_n(n) {
  return (n * (n + 1)) / 2;
}

console.log("Answers of Third Function:");
console.log("for number 5: " + sum3_to_n(5));
console.log("for number 7: " + sum3_to_n(7));
console.log("for number 10: " + sum3_to_n(10));
