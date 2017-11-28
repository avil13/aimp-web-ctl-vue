const fs = require('fs');
const path = require('path');
const getDirName = require('path').dirname;
const mkdirp = require('mkdirp');

let file = process.argv.slice(2)[0];

if (!file) {
    const _red = '\u001b\[31m';
    const _cyan = '\u001b\[36m';
    const _green = '\u001b\[32m';
    const _off = '\u001b\[0m';

    console.log('');
    console.log(`${_red}Empty file name!!!${_off}`);
    console.log('example:');
    const example = [
        _cyan,
        path.basename(process.argv[0]),
        ' ',
        path.basename(process.argv[1]),
        ' ',
        _green,
        'Component-name',
        _off
    ].join('');

    console.log(`  ${example}`);
    console.log('');
    process.exit(1);
}

file = path.normalize(file);

file = path.join(__dirname, 'src', 'components', file);

if (!(/.*\.vue$/).test(file)) {
    file += '.vue';
}

// Get template
const content = require('./create-tmpl').tmp(file);

writeFile(file, content)
    .then(() => {
        console.log(`\n \uD83D\uDC4D   ${file}\n`);
    })
    .catch((err) => {
        console.log('\uD83D\uDC80');
        console.log(err);
    });

/**
 * Functions ======
 */

function writeFile(path, contents) {
    return new Promise((resolve, reject) => {
        mkdirp(getDirName(path), function(err) {
            if (err) {
                return reject(err);
            }
            fs.writeFile(path, contents, 'utf8', (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    });
}
