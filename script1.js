/**
 * Calculates the sum of distinct elements from two sets.
 * @param {number[]} set1 - The first set of elements.
 * @param {number[]} set2 - The second set of elements.
 * @returns {number} - The sum of distinct elements.
 */
// The findDistinctSum function takes two sets of elements (set1 and set2) and calculates the sum of distinct elements present in either of the sets.
const findDistinctSum = (set1, set2) => {
  let sum = 0;

  // Iterate over set1 and add distinct elements to the sum
  // The forEach loop is used to iterate over set1 and add distinct elements to the sum variable if they are not present in set2.
  set1.forEach((element) => {
    if (!set2.includes(element)) {
      sum += element;
    }
  });

  // Iterate over set2 and add distinct elements to the sum
  // Another forEach loop is used to iterate over set2 and add distinct elements to the sum variable if they are not present in set1.
  set2.forEach((element) => {
    if (!set1.includes(element)) {
      sum += element;
    }
  });

  // The function returns the final sum of distinct elements.
  return sum;
};

// Test the function with the example sets
// A test case is included to demonstrate the usage of the function and display the output.
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const distinctSum = findDistinctSum(set1, set2);
console.log(distinctSum); // Output: 13
