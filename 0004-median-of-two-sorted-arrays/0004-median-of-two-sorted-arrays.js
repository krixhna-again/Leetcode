/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  // Ensure nums1 is the smaller array so binary search runs on the shorter one
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  const totalLeft = Math.floor((m + n + 1) / 2); // size of left half

  let lo = 0;
  let hi = m;

  while (lo <= hi) {
    const cut1 = Math.floor((lo + hi) / 2); // elements taken from nums1 into left half
    const cut2 = totalLeft - cut1;          // elements taken from nums2 into left half

    // Values just around the cut points (use +/- Infinity for out-of-range)
    const left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
    const left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
    const right1 = cut1 === m ? Infinity : nums1[cut1];
    const right2 = cut2 === n ? Infinity : nums2[cut2];

    if (left1 <= right2 && left2 <= right1) {
      // Correct partition found
      if ((m + n) % 2 === 0) {
        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
      } else {
        return Math.max(left1, left2);
      }
    } else if (left1 > right2) {
      // Too many elements from nums1 in the left half — move cut1 left
      hi = cut1 - 1;
    } else {
      // Too few elements from nums1 in the left half — move cut1 right
      lo = cut1 + 1;
    }
  }

  throw new Error('Input arrays are not sorted or invalid input');
}