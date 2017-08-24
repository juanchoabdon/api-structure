const connection = require('../../config/connection');
const mysql = require('mysql');
const db = mysql.createConnection(connection);

var controller= {};



controller.createCompanyQuery = function (data, callback) {
  if(db) {
     db.query('INSERT into companies set name='+db.escape(data.name)+',email='+db.escape(data.email)
             +',mobile_phone='+db.escape(data.mobile_phone), function (error, result){
        if(error) {
          console.log(error);
          throw error;
      } else {
        db.query('SELECT name,email,mobile_phone FROM companies WHERE email='
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



controller.updateCompanyQuery = function (data, callback) {
  if(db) {
     db.query('UPDATE companies SET name='+db.escape(data.name)+',email='+db.escape(data.email)
     +',mobile_phone='+db.escape(data.mobile_phone)
     +' WHERE email='+db.escape(data.email) , function (error, result){
      if(error) {
        throw error;
      } else {  db.query('SELECT name,email,mobile_phone FROM companies WHERE email='
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


controller.deleteCompanyQuery = function (data, callback) {
  if(db) {
    db.query('DELETE  FROM companies WHERE id =' +db.escape(data.id) ,  function(error, result) {
      if(error){
         throw error
      } else {
       callback(null,{'success':true})
      }
    })
  }
 }




controller.loginCompanyQuery = function (data, callback) {
     if(db) {
        db.query('SELECT id,name,email,mobile_phone from companies WHERE email=' + db.escape(data.email),function (error, result){
           if(error) {
             throw error;
           } else {
              callback(result)
           }
       })
    }
 }


controller.getEmployeesQuery = function (data, callback) {
  if(db) {
    db.query('SELECT * FROM employees WHERE company_id =' + db.escape(data.id) ,  function(error, result) {
      if(error){
         throw error
      } else {
        callback(result)
      }
    })
  }
 }

 controller.getOrdersQuery = function (data, callback) {
     if(db) {
       db.query('SELECT * FROM orders WHERE company_id =' +db.escape(data.id) ,  function(error, result) {
         if(error){
            throw error
         } else {
            for(var order of result ) {

              switch(order.status) {
                case 0:
                order.status_label = 'Cancelada';
                 break;
                case 1:
                 order.status_label = 'Por tomar';
                 break;
                case 2:
                 order.status_label = 'En camino';
                  break;
                case 3:
                 order.status_label = 'Finalizada';
                  break;
              }

            }
            callback(result)
         }
       })
     }
  }





module.exports = controller;
