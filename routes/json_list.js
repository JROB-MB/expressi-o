var express = require('express');
var router = express.Router();

const json_list = require('../services/json_list');

/* GET json_list listing. */
router.get('/', async function(req, res, next) {
    try{
        res.json(await json_list.getMultiple(req.query.page));
    }catch(err){
     console.error('Error'+ err.message)
     next(err);
    }
});
 
module.exports = router;