const moveZeroes = function (nums) {
  //Start coding here
let right = nums.length - 1

  for (let left = nums.length - 1; left >= 0; left--) {
    if (nums[left] === 0) {
      let temp = nums[right]
      nums[right] = nums[left]
      nums[left] = temp
      right--
    }
    console.log(nums);
    console.log(left);
    console.log(right);
  }

return nums
};

const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes([0]);
console.log(result2); // [0]
