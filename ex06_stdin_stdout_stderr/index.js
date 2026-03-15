import { stdin, stdout, stderr, exit } from 'node:process';

//stdin.pipe(stdout);

let data = '';
stdin.on('readable', () => {
    const chunk = stdin.read();
    if(chunk !== null) {
        data += chunk;
    }
    //console.log('r');
});

stdin.on('end', () => {
    //console.log('Data', data);
//console.log('e');
throw new Error("!!!");
//stdout.write('Program finished\n');
//exit(0);
//stderr.write('Program error\n');
});