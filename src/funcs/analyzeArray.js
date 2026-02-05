export function analyzeArray(arr){
    const result = arr.reduce((acc, curr) => {
        acc.min = Math.min(acc.min, curr);
        acc.max = Math.max(acc.max, curr);
        acc.sum += curr;

        return acc;
    }, {
        sum: 0,
        min: arr[0],
        max: arr[0],
    });

    return {
        average: result.sum / arr.length,
        min: result.min,
        max: result.max,
        length: arr.length
    };
}