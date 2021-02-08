const twoSums = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const candidate_i = nums[i];

        for (let j = 1; j < nums.length; j++) {
            const candidate_j = nums[j];
            
            if(i !== j && j > i) {
                if(candidate_i + candidate_j === target) {
                    return [i, j]
                }
            }
        }
    }
    return 'no solution'
}

console.log(twoSums([2,7,11,15], 13))
console.log(twoSums([3,2,4], 6))
console.log(twoSums([3,3], 6))