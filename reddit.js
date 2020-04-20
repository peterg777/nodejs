const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

let redditPath = path.join(__dirname, './popular-articles.json');

rp('https://www.reddit.com/r/popular.json')
    .then(data => {
        let articleList = JSON.parse(data);



        const popularArticles = articleList.data.children.map(article => {
            return {
                title: article.data.title,
                url: article.data.url,
                author: article.data.author
            }
        });

        fs.writeFile(redditPath, JSON.stringify(popularArticles), err => {
            if (err) console.log(err);
        })
    })
    