const fs = require('fs');
const mergeSort = require('./mergeSort');

const fileName = process.argv[2];

const parseData = (data) => {
    return data.split(' ').map(Number).filter(num => !isNaN(num));
};

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(`Erreur lors de la lecture du fichier: ${error.message}`);
        return;
    }

    const numbers = parseData(data);
    console.log('Nombres lus:', numbers);

    const merge = mergeSort(numbers.slice());
    console.log(`Tri fusion: ${merge.countComparisons.count} comparaisons // ${merge.sortedArray}`);
});
