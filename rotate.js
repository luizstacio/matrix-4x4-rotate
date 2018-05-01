module.exports = function (matrix) {
    const N = Math.sqrt(matrix.length);
    const rotate = index => {
        const column = Math.floor(index / N);
        const row = (index % N);
        return (((N - row) - 1) * N) + column; // calculate the rotated index
    };

    return matrix.map((column, index) => {
        return matrix[rotate(index)];
    });
}