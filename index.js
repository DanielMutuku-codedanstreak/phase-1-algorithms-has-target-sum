function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n*2) this is because we are iterating in a nested loop
*/

/* 
  Add your pseudocode here
  -We use two nested loops to iterate through each pair of elements in the array.
  -For each pair, we check if their sum equals the target.
  -If we find a pair that satisfies the condition, we return true.
  -If no such pair is found after checking all pairs, we return false.
*/

/*
  Add written explanation of your solution here
  You are given an array of integers (array) and an integer (target). Write a function hasTargetSum that returns true if there are two numbers in the array that add up to the target, and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
