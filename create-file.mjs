import * as fs from 'fs';

const info =fs.readFileSync('newfile.txt');
console.log(info.toString());