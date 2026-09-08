var lengthOfLastWord = function(s) {
    s = s.trim();

    let lastSpace = s.lastIndexOf(" ");

    return s.length - lastSpace - 1;
};