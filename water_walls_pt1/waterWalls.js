const _ = require('lodash');

const waterWalls = function findLargestWaterWallsTrough (walls) {
  // Starting at the left edge, repeat until out of walls:
    // Proceed right until the left wall of a trough is found. Record position, (i + 1)
    // Proceed right until the right wall of a trough is found. Record position (j + 1), then measure the trough:
      // Of the 2 walls, the shortest sets the waterLevel. 
      // Iterate thru walls between them (non-inclusive), summing the differences: waterLevel - wall
    // Compare sum with greatest capacity found so far, and if greater, replace with latest trough data.
    // Begin search for next trough left wall with current right wall
  // Return trough data

  let output = null;
  let leftWall = 0;
  let rightWall = null;
  for (let i = 0; i < walls.length; i++) {
    
  }
  return output;
};

const checklist = [
  { input: [5, 3, 7, 2, 6, 4, 5, 9, 1, 2], output: [3, 8, 11] },
  { input: [], output: null },
  { input: [5], output: null },
  { input: [5, 10], output: null },
  { input: [1, 2, 3], output: null },
  { input: [3, 2, 1], output: null },
  { input: [2, 3, 2], output: null },
  { input: [2, 1, 3], output: [1, 3, 1] },
  { input: [2, 0, 3], output: [1, 3, 2] },
  { input: [2, 1, 3], output: [1, 3, 1] },
  { input: [2, 3, 4, 3, 1, 2], output: [4, 6, 1] },
  { input: [2, 3, 4, 3, 1, 2, 1, 1, 1], output: [4, 6, 1] },
];

const runTests = (func, testcases) => {
  console.log('Running ', testcases.length, ' testcases for ', func.name);
  testcases.forEach((test, i) => {
    console.log(
      func(test.input).toString() === test.output.toString()
        ? `Test # ${i} - OK\n`
        : `Failed at test # ${i}! \n  Input: ${test.input} \n  Expected: ${test.output}\n`
    );
  });
};

runTests(waterWalls, checklist);
