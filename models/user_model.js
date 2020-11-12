var db = require('../db_conection');
var user = {
    createuser:function (item,callback) {
            console.log(item);
            return db.query('insert into  user_tbl(user_name,user_password) values (?,?)',[item.user_name,item.user_password],callback);
        },
    checkuser:function(item,callback){
            return db.query('select * from user_tbl where user_name=? and user_password=?',[item.user_name,item.user_password],callback);
    }    
}
module.exports = user;