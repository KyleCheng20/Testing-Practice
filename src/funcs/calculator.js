export const calculator = {
    add(a, b){
        if(typeof a !== "number" || typeof b !== "number"){
            return "ERROR";
        }
        return a + b;
    },
    subtract(a, b){
        if(typeof a !== "number" || typeof b !== "number"){
            return "ERROR";
        }
        return a - b;
    },
    multiply(a, b){
        if(typeof a !== "number" || typeof b !== "number"){
            return "ERROR";
        }
        return a * b;
    },
    divide(a, b){
        if(typeof a !== "number" || typeof b !== "number"){
            return "ERROR";
        }
        return a / b;
    }
}