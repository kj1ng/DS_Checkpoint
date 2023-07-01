/**
 * Calculates the dot product of two vectors.
 * @param {number[]} v1 - The first vector.
 * @param {number[]} v2 - The second vector.
 * @returns {number} - The dot product of the two vectors.
 * @throws {Error} - If the vectors have different lengths.
 */
const dotProduct = (v1, v2) => {
  // Check if the vectors have the same length
  if (v1.length !== v2.length) {
    throw new Error("Vectors must have the same length.");
  }

  let result = 0;
  // Calculate the dot product by multiplying corresponding elements and summing them
  for (let i = 0; i < v1.length; i++) {
    result += v1[i] * v2[i];
  }

  return result;
};

/**
 * Checks if two vectors are orthogonal.
 * @param {number[][]} vectors - An array of vectors.
 * @returns {boolean} - True if the vectors are orthogonal, false otherwise.
 */
const checkOrthogonal = (vectors) => {
  const n = vectors.length;

  // Iterate over each pair of vectors
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // Calculate the dot product of the current pair of vectors
      const dotProd = dotProduct(vectors[i], vectors[j]);

      // If the dot product is non-zero, the vectors are not orthogonal
      if (dotProd !== 0) {
        return false;
      }
    }
  }

  // If all dot products are zero, the vectors are orthogonal
  return true;
};

// Test the function with example vectors
const vectors = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
const isOrthogonal = checkOrthogonal(vectors);
console.log(isOrthogonal + ": given vectors are orthogonal"); // Output: true
