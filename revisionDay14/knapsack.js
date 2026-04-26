const knapSack = (values, weights, target) => {
  // T[i][j] holds the max value of knapsack
  let T = new Array(values.length + 1);
  for(let i = 0; i < T.length; i++){
    T[i] = new Array(target+1).fill(0);
  }

  // for ith item
  for (let i = 1; i <= values.length; i++) {
    // choose all weights from 0 to maximum capacity W
    
    for (let j = 0; j <= target; j++) {
      // base case: don't pick ith element if j-weights[i-1] is negative
      if (weights[i-1] > j) {
        T[i][j] = T[i-1][j];
      } else {
        // store the max value that we get by picking or leaving the i'th item
        T[i][j] = Math.max(T[i-1][j], T[i-1][j-weights[i-1]] + values[i-1]);
      }
    }
  }

  // return maximum value
  return T[values.length][target];
}

const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const target = 15;

console.log(knapSack(values, weights, target));
