var isSymmetric = function(root) {
    function mirror(left, right) {
        if (left === null && right === null) {
            return true;
        }

        if (left === null || right === null) {
            return false;
        }

        if (left.val !== right.val) {
            return false;
        }

        return mirror(left.left, right.right) &&
               mirror(left.right, right.left);
    }

    return mirror(root.left, root.right);
};