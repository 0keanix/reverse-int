module.exports = function reverse (n) {
    if (n < 0) {
        n = n * -1;
    }
    const arr = n.toString().split('');
    let result = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i];
    }
    return result;
}
