var express = require('express');
var router = express.Router();

// stock temporary in server when the test haven't db.
var statisque = {};

function saveStatitisque(url) {
    if (url in statisque)
        statisque[url]++;
    else
        statisque[url] = 1;
}

function getMostRequest() {
    let max = 0;
    let url = null;
    for (k in statisque) {
        if (statisque[k] > max) {
            max = statisque[k];
            url = k
        }
    }
    return max ? { url: url , numberAccess: max } : {}; 
}

router.get('/', function (req, res) {

    // default value
    let firstStr = 'fizz';
    let firstInt = 3;
    let secondStr = 'buzz';
    let secondInt = 5;

    if (!isNaN(req.query.intOne)) {
        firstInt = Number(req.query.intOne);
        if (req.query.strOne) {
            firstStr = req.query.strOne;

        }
    }

    if (!isNaN(req.query.intTwo)) {
        secondInt = Number(req.query.intTwo);
        if (req.query.strTwo)
            secondStr = req.query.strTwo;
    }

    const onBoth = firstStr + secondStr;

    const limit = isNaN(req.query.limit) ? 100 : Number(req.query.limit);

    res.send([...Array(limit)].map((_, i) => {
        const number = i + 1;

        if (number % firstInt === 0) {
            if (number % secondInt === 0) {
                return onBoth;
            } else {
                return firstStr;
            }
        }

        if (number % secondInt === 0) {
            return secondStr;
        }

        return number;
    }));

    saveStatitisque(req.url);
});

router.get('/metric', function (req, res) {
    const mostRequest = getMostRequest();
    res.send(mostRequest)
});

router.get('/*', function (req, res) {
    res.send(null)
});

module.exports = router;
