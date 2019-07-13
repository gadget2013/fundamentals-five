const palindromes = function(string) {
    processString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    return (
        processString
            .split("")
            .reverse()
            .join("") == processString
    );
};

module.exports = palindromes
