var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        // Calculate current area
        let width = right - left;
        let h = Math.min(height[left], height[right]);

        let area = width * h;

        // Update maximum water
        maxWater = Math.max(maxWater, area);

        // Move the pointer with smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};