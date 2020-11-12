var express = require("express");
var router = express.Router();
var form = require('../models/form_model');

router.post('/:fk_user_id', function (req, res, next) {
    form.getallforms(req.params.fk_user_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/:form_id', function (req, res, next) {
    form.getformdetails(req.params.form_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res, next) {
    form.createform(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.delete('/:form_id', function (req, res, next) {
    form.deleteform(req.params.form_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/:form_id',function(res,req,next){
    form.editform(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports = router;