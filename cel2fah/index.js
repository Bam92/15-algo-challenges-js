module.exports = function convertToF(param) {
    if(!isNaN(param)) {
        if(param === 0) {
            return 32;
        }

        return param * 9/5 + 32;
    }
}

