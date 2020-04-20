const path = require('path');
const fs = require('fs');
const rp = require('request-promise');


rp('https://www.reddit.com/r/popular.json')
    .then(data => {
        let articleList = JSON.parse(data);

        articleList.data.children.forEach(article => {
            let ext = path.extname(article.data.url)
            let pathName = article.data.id + ext
            if (ext === '.jpg' || ext === '.png') {

                rp(article.data.url, { encoding: "base64" })
                    .then(image => {
                        fs.writeFile(path.join(__dirname, `./downloads/${pathName}`), image, { encoding: "base64" }, err => {
                            if (err) console.log(err);

                        })
                    })

            }

        })


    })
