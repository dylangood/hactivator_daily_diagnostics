const _ = require('lodash');

const waterWalls = function findLargestWaterWallsTrough (heights) {
  
  const measureTrough = function measureTrough(section) {
    let waterLevel = Math.min(section[0], section[section.length - 1]);
    let waterVolume = 0;
    for (let i = 1; i < section.length - 1; i++) {
      waterVolume += Math.max(0, waterLevel - section[i]);
    }
    return waterVolume;
  };
  
  const findTroughs = function findTroughsClimbingTowardsPeak(heights) {
    let troughData = false;
    let leftWall = 0;
    let rightWall = 1;
    for (let i = 2; i < heights.length; i++) {
      if (heights[i] >= heights[leftWall]) {
        rightWall = i;
        let capacity = measureTrough(heights.slice(leftWall, rightWall + 1));
        if (capacity && (!troughData || capacity > troughData[2])) {
          troughData = [1 + leftWall, 1 + rightWall, capacity];
        }
        leftWall = i;
        rightWall = i + 1;
      } 
    }
    return troughData;
  };
  
  if (heights.length < 3) { return false; }
  
  let peak = heights.indexOf(Math.max(...heights));
  
  let west = heights.slice(0, peak + 1);
  let east = heights.slice(peak).reverse();
  
  let westBest = findTroughs(west);
  let eastBest = findTroughs(east);
  if (eastBest) {
    eastBest = [heights.length - eastBest[1] + 1, heights.length - eastBest[0] + 1, eastBest[2]];
  }
  if (eastBest && westBest) {
    return eastBest[2] > westBest[2] ? eastBest : westBest;
  } else {
    return westBest || eastBest || false;
  } 
};

const checklist = [
  { input: [5, 3, 7, 2, 6, 4, 5, 9, 1, 2], output: [3, 8, 11] },
  { input: [5, 3, 7, 2, 6, 4, 5, 6, 1, 2], output: [3, 5, 4] },
  { input: [], output: false },
  { input: [5], output: false },
  { input: [5, 10], output: false },
  { input: [1, 2, 3], output: false },
  { input: [3, 2, 1], output: false },
  { input: [2, 3, 2], output: false },
  { input: [2, 1, 3], output: [1, 3, 1] },
  { input: [2, 0, 3], output: [1, 3, 2] },
  { input: [2, 1, 3], output: [1, 3, 1] },
  { input: [2, 3, 4, 3, 1, 2], output: [4, 6, 1] },
  { input: [2, 3, 4, 3, 1, 2, 1, 1, 1], output: [4, 6, 1] },
];
