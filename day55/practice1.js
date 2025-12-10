function solution(nums) {
    let fMin = Infinity;
    let sMin = Infinity;
    let fMax = -Infinity;
    let sMax = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < fMin) { // s1: 12<infinite // s3: 1<12. // s4: 10<1
            sMin = fMin;    // sMin=Infinite // sMin=12
            fMin = nums[i]; // fMin=12. // fMin=1
        } else if (nums[i] < sMin && nums[i] != fMin) { //10<12
            sMin = nums[i];  // sMin=35 // sMin=10
        }
        if (nums[i] > fMax) {  // s1: 12>-infinity
            sMax = fMax;      // sMax=-infinity // smax=12
            fMax = nums[i];   // fMax=12. // fmax=35
        } else if (nums[i] > sMax && nums[i] != fMax) { // 34>12
            sMax = nums[i]; // sMax=34
        }
    }
    console.log(sMin + " " + sMax)
}
let arr = [12, 35, 1, 10, 34, 1];
solution(arr)