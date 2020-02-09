module.exports = function truncateString(str, num) {
    if(num < str.length) {
        return str.substring(0, num) + "...";
    }
    else {
        return str;
    }
}

