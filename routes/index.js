var express = require('express');
var router = express.Router();

//Get Homepage
router.get('/', function(req, res) {
    res.render('index', {title: 'Hyacinth'});
});

router.get('/about', function(req, res) {
    res.render('about', {title: 'Hyacinth - About'});
});

router.get('/news', function(req, res) {
    res.render('news', {title: 'Hyacinth - News'})
})

module.exports = router;