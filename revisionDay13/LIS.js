// LIS -> Longest Increasing Subsequence
function lis(arr) {
    let n = arr.length;
    let dp = Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}
console.log(lis([10,18,1,3,4,6,2]))