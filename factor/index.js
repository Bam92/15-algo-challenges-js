module.exports = function factorialize(num) {
        if(Number.isInteger(num)) {
            if(num === 0) {
                return 1;
            }
    
            return num * factorialize(num - 1);
        }
    }

