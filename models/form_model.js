var db = require('../db_conection');
var form={
        getallforms:function(fk_user_id,callback){
            return db.query('select * from form_tbl where fk_user_id=?',[fk_user_id],callback);
        },
        getformdetails: function(form_id,callback) {
              return db.query('select * from form_tbl where form_id=?',[form_id],callback)
        },
        createform:function(item,callback){
            return db.query('insert into form_tbl(fk_user_id,form_name,f_name,m_name,l_name,address,gender,secondary,high_secondary,graduation,post_graduation,dob) values(?,?,?,?,?,?,?,?,?,?,?,?)',[
                item.fk_user_id,
                item.form_name,
                item.f_name,
                item.m_name,
                item.l_name,
                item.address,
                item.gender,
                item.secondary,
                item.high_secondary,
                item.graduation,
                item.post_graduation,
                item.dob],callback);
        },
        deleteform(form_id,callback){
            return db.query('delete from form_tbl where form_id=?',[form_id],callback);
        },
        editform(item,callback){
            return db.query('update form_tbl set fk_user_id=?,form_name=?,f_name=?,m_name=?,l_name=?,address=?,gender=?,secondary=,high_secondary=?,graduation=?,post_graduation=?,dob=? where form_id=?'[
            item.fk_user_id,
            item.form_name,
            item.f_name,
            item.m_name,
            item.l_name,
            item.address,
            item.gender,
            item.secondary,
            item.high_secondary,
            item.graduation,
            item.post_graduation,
            item.dob],callback);
        }
}
module.exports=form;