// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

// ❌ Error Type: Syntax Error (missing closing quote and parenthesis)
// console.log("Welcome to the bootcamp

// ✅ Fix:
console.log("Welcome to the bootcamp");

// ✔ Verified: runs correctly and prints message



// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

// ❌ Error Type: Runtime Error (trying to multiply a string "eight")

let numbers = [2, 4, "eight"];

for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "number") {
    let doubled = numbers[i] * 2;
    console.log(doubled);
  } else {
    console.log("Skipping non-number:", numbers[i]);
  }
}

// ✔ Verified: no crash, skips invalid value



// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime.

// ❌ Error Type: Logic Error (returns true when NOT prime, false when prime)

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // NOT prime
    }
  }

  return true; // prime
}

console.log(isPrime(7)); // ✔ true
