var db=require('mysql');
var con=db.createPool({
        host:'localhost',
        user:'root',
        password:'',
        database:'form_build'
});
module.exports=con;