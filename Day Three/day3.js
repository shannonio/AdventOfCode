import * as readline from 'node:readline/promises';
import f from 'fs';

// var file = './day3input.txt';
// var rl = readline.createInterface({
//     input : f.createReadStream(file),
//     output : process.stdout,
//     terminal: false
// });

import { once } from 'events';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const data = [];

(async function processLineByLine() {
  try {
    const rl = createInterface({
      input: createReadStream('./day3input.txt'),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      data.push(line);
    });

    await once(rl, 'close');

    console.log('File processed. Length: ', data.length);
    getPowerConsumption(data);
  } catch (err) {
    console.error(err);
  }
})();

const getPowerConsumption = (input) => {
    console.log('Starting...');
    const numArraysByPos = {};
    let gammaRate = '';
    let epsilonRate = '';

    input.forEach(text => { 
        text.split('').forEach((digit, index) => {
            if(!numArraysByPos[index]) {
                numArraysByPos[index] = [];
            } 

            numArraysByPos[index].push(digit); 
        });
    });

    Object.keys(numArraysByPos).forEach((k) => {
        const sum = numArraysByPos[k].reduce(((a,b) => parseInt(a) + parseInt(b)), 0);
        const average = Math.round((sum/numArraysByPos[k].length).toString());
        console.log(average)
        gammaRate = gammaRate + average;
        epsilonRate = epsilonRate + (average == '1' ? '0' : '1');
    });

    console.log(gammaRate, parseInt(gammaRate, 2));
    console.log(epsilonRate, parseInt(epsilonRate, 2));

    const powerConsumption = parseInt(gammaRate, 2)*parseInt(epsilonRate, 2);

    console.log(powerConsumption);
}


