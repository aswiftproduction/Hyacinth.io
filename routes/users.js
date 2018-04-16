let express = require('express');
let router = express.Router();

router.get('/signup', function(req, res) {
    res.render('signup', {title: 'Hyacinth - Signup'})
});

router.get('/login', function(req, res) {
    res.render('login', {title: 'Hyacinth - Login'});
});


module.exports = router;