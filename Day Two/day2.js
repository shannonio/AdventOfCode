import readLine from 'readline';
import f from 'fs';

var file = './day2input.txt';
// var file = './day2testinput.txt';
var rl = readLine.createInterface({
    input : f.createReadStream(file),
    output : process.stdout,
    terminal: false
});

const getSubLocation = () => {
    let depth = 0;
    let position = 0;
    let aim = 0;

    rl.on('line', function (text) {
        const thisLine = text.split(' ');
        if (thisLine[0] === 'forward') {
            position = position + parseInt(thisLine[1]);
            depth = depth + (aim*parseInt(thisLine[1]));
        } else if (thisLine[0] === 'down') {
            // depth = depth + parseInt(thisLine[1]);
            aim = aim + parseInt(thisLine[1]);
        } else if (thisLine[0] === 'up') {
            // depth = depth - parseInt(thisLine[1]);
            aim = aim - parseInt(thisLine[1]);
        }

        console.log(
        'Aim', aim, 
        'depth', depth, 
        'horiz', position, 
        'final', (depth * position)
    )
    });
}

getSubLocation();