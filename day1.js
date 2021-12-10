import data from './day1input.js';

// const data = [
//     199,
//     200,
//     208,
//     210,
//     200,
//     207,
//     240,
//     269,
//     260,
//     263
// ];

const run = () => {
    const final = data.reduce((count, curr, index) => {
        if (curr > data[index-1]) {
            count = count + 1;
            console.log(curr, count);
        }

        return count;
    }, 0);

    return final;
}

console.log(run());