const fs = require('fs');

const writeFile = (fileContent) => {
    fs.writeFile('./dist/index.html', fileContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('HTML has been generated!');
        }
    });
};

const copyFile = () => {
        fs.copyFile('./style.css', './dist/style.css', err => {
            if (err) {
                console.log(err);
            } else {
                console.log('HTML has been generated!');
            }
        });
}

module.exports = { writeFile, copyFile};