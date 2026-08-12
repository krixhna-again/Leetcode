var convert = function(s, numRows) {
    // Edge case
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    // Create rows
    let rows = new Array(numRows).fill("");

    let currentRow = 0;
    let goingDown = false;

    // Place each character in the correct row
    for (let char of s) {
        rows[currentRow] += char;

        // Change direction at top or bottom
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    // Join all rows
    return rows.join("");
};