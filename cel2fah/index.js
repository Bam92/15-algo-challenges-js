module.exports = function convertToF(cel) {
    if(!isNaN(cel)) {
        if(cel === 0) {
            return 32;
        }

        return cel * 9/5 + 32;
    }
}

