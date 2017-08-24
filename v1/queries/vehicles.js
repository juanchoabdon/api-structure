const connection = require('../../config/connection');
const mysql = require('mysql');
const db = mysql.createConnection(connection)

var controller= {};

controller.createVehicleQuery = function (data, callback) {
  if(db) {
     db.query( 'INSERT into vehicles set type='+db.escape(data.type)+',plate='+db.escape(data.plate)
               +',loading_capacity='+db.escape(data.loading_capacity)+',capacity_employees='+db.escape(data.capacity_employees)
               +',passengers='+db.escape(data.passengers)+',status='+db.escape(data.status)
               +',employee_id='+db.escape(data.employee_id)+',company_id='+db.escape(data.company_id) , function (error, result){
        if(error) {
           throw error;
      } else { callback(null,{'success':true})
    }
  })
}
}


controller.updateVehicleQuery = function (data, callback) {
  if(db) {
     db.query( 'UPDATE vehicles SET type ='+db.escape(data.type)+',plate='+db.escape(data.plate)
              +',loading_capacity='+db.escape(data.loading_capacity)+',capacity_employees='+db.escape(data.capacity_employees)
              +',passengers='+db.escape(data.passengers)+',status='+db.escape(data.status)
              +',employee_id='+db.escape(data.employee_id)+',company_id='+db.escape(data.company_id)
              +'WHERE id ='+db.escape(data.id), function (error, result){
      if(error) {
        throw error;
      } else {
        db.query('SELECT type,plate,loading_capacity,capacity_employees,passengers,status,employee_id,company_id FROM vehicles WHERE email='
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


controller.deleteVehicleQuery = function (data, callback) {
  if(db) {
     db.query('DELETE  FROM vehicles WHERE id =' +db.escape(data.id) ,  function(error, result) {
      if(error){
         throw error
      } else {callback(null,{'success':true})
    }
  })
}
}



module.exports = controller;
