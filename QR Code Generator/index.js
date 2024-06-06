import inquirer from 'inquirer';
import { createWriteStream} from 'fs';

import pkg from 'qr-image';
const { image, pipe } = pkg;

inquirer
    .prompt({
        type: 'input',
        name: 'text',
        message: 'Enter the URL for the QR code:',
    })
    .then((answers) => {
        console.log(answers['text']);
        saveSvg(answers['text']);
    }) //then
    .catch((error) => {
        if (error) throw error;
    });


let saveSvg = (url) => {
    let qr_svg = image(url, { type: 'svg' });
    qr_svg.pipe(createWriteStream('url.svg'));
}; 
