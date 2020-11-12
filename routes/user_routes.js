var express = require("express");
var router = express.Router();
var user=require("../models/user_model")

router.post('/:check',function(req,res,next){
    user.checkuser(req.body,function(rows,err){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.post('/',function(req,res,next){
    user.createuser(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;