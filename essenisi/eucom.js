function createInterpolator(rangeArray) {
  return function(x) {
    // Find the two closest values in the range array
    let lowerIndex = 0;
    let upperIndex = rangeArray.length - 1;
    while (upperIndex > lowerIndex + 1) {
      const midIndex = Math.floor((lowerIndex + upperIndex) / 2);
      if (rangeArray[midIndex] <= x) {
        lowerIndex = midIndex;
      } else {
        upperIndex = midIndex;
      }
    }
    const lowerValue = rangeArray[lowerIndex];
    const upperValue = rangeArray[upperIndex];
    // Interpolate between the two closest values
    const t = (x - lowerValue) / (upperValue - lowerValue);
    return lowerIndex + t;
  };
}

// Example usage
const rangeArray = [0, 1, 2, 3, 4];
const interpolator = createInterpolator(rangeArray);
console.log(interpolator(2.5)); // Output: 2.5
