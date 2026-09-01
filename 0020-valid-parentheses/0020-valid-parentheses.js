var isValid = function(s) {
    let stack = [];

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            let top = stack.pop();

            if (
                (char === ')' && top !== '(') ||
                (char === '}' && top !== '{') ||
                (char === ']' && top !== '[')
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
};