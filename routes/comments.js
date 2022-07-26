var express = require('express');
var router = express.Router();

const comments = require('../services/comments');

/* GET users listing. */
router.get('/:id', async function(req, res, next) {
    try{
        res.json(await comments.getComments(req.params.id));
    }catch(err){
     console.error('Error'+ err.message)
     next(err);
    }
});
module.exports = router;