const rotate = require('./rotate');
const fs = require('fs');


console.log('reading file...');
fs.readFile('./matrix.json', (err, file) => {
    if (err) console.error('error ', err);
    console.log('file ready');
    console.log('parsing file');
    const matrix = JSON.parse(file).matrix;
    console.log('matrix ready', JSON.stringify(matrix));
    const rotatedMatrix = rotate(matrix);
    console.log('matrix rotated', JSON.stringify(rotatedMatrix));
});