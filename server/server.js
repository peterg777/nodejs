const path = require('path');
const fs = require('fs');

let chirpsPath = path.join(__dirname, './chirps.json');

fs.readFile(chirpsPath, 'utf-8' ,(err, data) => {
    if (err) console.log(err) ;

    console.log(data);
});

 


