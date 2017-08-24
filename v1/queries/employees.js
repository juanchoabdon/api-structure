const connection = require('../../config/connection');
const mysql = require('mysql');
const db = mysql.createConnection(connection)

var controller= {};



controller.createEmployeeQuery = function (data, callback) {
  if(db) {
  db.query( 'INSERT into employees set first_name='+db.escape(data.first_name)+',last_name='+db.escape(data.last_name)
           +',email='+db.escape(data.email)+',mobile_phone='+db.escape(data.mobile_phone)
           +',age='+db.escape(data.age)+',type=1,license=1,company_id='+db.escape(data.company_id)+',status=1' , function (error, result){
     if(error) {
        throw error;
    } else {
      if(db) {
         db.query('SELECT first_name,last_name,email,mobile_phone,age,type,license,status,company_id FROM employees WHERE email='
                  +db.escape(data.email) ,function (error, result){
        if(error) {
          throw error
        } else {  callback(result[0]) }
      })
    }
  }
 })
 }
}




controller.updateEmployeeQuery = function (data, callback) {
   if(db) {
      db.query('UPDATE employees SET first_name='+db.escape(data.first_name)+',last_name='+db.escape(data.last_name)
              +',email='+db.escape(data.email)+',mobile_phone='+db.escape(data.mobile_phone)
              +',age='+db.escape(data.age)+',type='+db.escape(data.type)+',license='+db.escape(data.license)
              +',status=' +db.escape(data.status)+',company_id='+db.escape(data.company_id)
              +' WHERE email='+db.escape(data.email), function (error, result){

    if(error) {
      throw error;
    } else {
      db.query('SELECT first_name,last_name,email,mobile_phone,age,type,license,status,company_id FROM employees WHERE email='
                +db.escape(data.email) ,function (error, result){
          if(error) {
            throw error
          } else {
          callback(result[0])
        }
      })
      }
    })
  }
}




controller.deleteEmployeeQuery = function (data, callback) {
  if(db) {
     db.query('DELETE  FROM employees WHERE id =' + db.escape(data.id) ,  function(error, result) {
        if(error){
         throw error
      } else {callback(null,{'success':true})
    }
  })
 }
}


controller.loginEmployeeQuery = function (data, callback) {
  if(db) {
    db.query('SELECT id,first_name,last_name,email,mobile_phone,age,type,license,status,company_id from employees WHERE email='
             + db.escape(data.email)  , function (error, result) {
      if(error) {
        throw error;
      } else {
        callback(result[0])
      }
    })
  }
 }

 controller.ordersEmployeeQuery = function (data, callback) {
   if(db) {
     db.query('SELECT * from orders WHERE employee_id='
              + db.escape(data.id) + 'AND status=' + db.escape(data.status)  , function (error, result) {
       if(error) {
         throw error;
       } else {
         callback(result)
       }
     })
   }
 }

  controller.statusEmployeeQuery = function (data, callback) {
    if(db) {
      db.query('UPDATE employees SET status=' +db.escape(data.status)
              +' WHERE id ='+db.escape(data.id), function (error, result){
        if(error) {
          throw error;
        } else {
          callback(null,{'success':true})
        }
      })
    }
   }



module.exports = controller;
