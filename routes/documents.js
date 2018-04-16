let express = require('express');
let router = express.Router();

//Installtion Documentation
router.get('/installing-hyacinth', function(req, res) {
    res.render('documentation', {title: 'Installing Hyacinth'});
});

module.exports = router;