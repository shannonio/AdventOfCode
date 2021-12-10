import data from './day1input.js';

const first = (data) => {
    const final = data.reduce((count, curr, index) => {
        if (curr > data[index-1]) {
            count = count + 1;
        }

        return count;
    }, 0);

    return final;
}

// const data = [
//     607,
//     618,
//     618,
//     617,
//     647,
//     716,
//     769,
//     792
// ];

const second = (data) => {
    let firstWindow = [0,1,2];
    let secondWindow = [1,2,3];

    let currIndex = 2;
    let count = 0;

    while (currIndex < data.length - 1) {
        // console.log(firstWindow, secondWindow);
        const sumA = data[firstWindow[0]] + data[firstWindow[1]] + data[firstWindow[2]];
        const sumB = data[secondWindow[0]] + data[secondWindow[1]] + data[secondWindow[2]];
        // console.log(sumB)
        if (sumB > sumA) {
            count = count + 1;
        }

        firstWindow = secondWindow;
        secondWindow = secondWindow.map(n => n+1);
        
        currIndex++;
    }

    return count;
}

const run = () => {
    // console.log(first(data));
    console.log(second(data));

}

run();

