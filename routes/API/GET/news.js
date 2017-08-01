const express = require('express');
const feedparser = require('rss-to-json');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    feedparser.load('http://www.mcg.gehrden.de/portal/rss.xml', (err, rss) => {
        if(err) {
            res.sendStatus(500);
            return;
        }
        let answer = {};
        answer.de = rss.description;
        answer.ti = rss.title;
        answer.u = rss.url;
        answer.i = [];
        for(let i = 0; i < rss.items.length; i++){
            let enc;
            if(rss.items[i].enclosures) enc = rss.items[i].enclosures[0].url;
            answer.i.push({
                t: rss.items[i].title,
                d: rss.items[i].description,
                l: rss.items[i].link,
                c: rss.items[i].created,
                e: enc
            })
        }
        res.status(200).json(answer);
    })
});

module.exports = router;