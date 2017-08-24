const connection = require('../../config/connection');
const mysql = require('mysql');
const db = mysql.createConnection(connection)

var controller= {};



controller.createOrderQuery = function (data, callback) {
    if(db) {
      db.query( 'INSERT into orders set description='+ db.escape(data.description) + ',starts_address='+ db.escape(data.starts_address) + ',price = 0 ,lat_destiny='+db.escape(data.lat_destiny)
                +',lng_destiny='+db.escape(data.lng_destiny)+',employee_id='+db.escape(data.employee_id)
                +',company_id='+db.escape(data.company_id) +',status = 1' , function (error, result){
        if(error) {
           throw error;
        } else {
                callback(null,{'success':true})
              }
        })
     }
  }


controller.deleteOrderQuery = function (data, callback) {
    if(db) {
    db.query('DELETE  FROM orders WHERE id =' +db.escape(data.id) ,  function(error, result) {
      if(error){
         throw error
    } else {  callback(null,{'success':true})
  }
})
}
}

controller.getOrderQuery = function (data, callback) {
    if(db) {
    db.query('SELECT * FROM orders WHERE id =' + db.escape(data.id) ,  function(error, result) {
      if(error){
         throw error
    } else {
       callback(result)
       }
    })
  }
}



controller.updateOrderQuery = function (data, callback) {
    if(db) {
       db.query( 'UPDATE orders SET price='+db.escape(data.price)+',starts_at ='+db.escape(data.starts_at)+',lat_origin='+db.escape(data.lat_origin)
                 +',lng_origin='+db.escape(data.lng_origin)+',lat_destiny='+db.escape(data.lat_destiny)
                 +',employee_id='+db.escape(data.employee_id)+',company_id='+db.escape(data.company_id)
                 +',status='+db.escape(data.status)+' WHERE id='+db.escape(data.id) , function (error, result){
        if(error) {
          throw error;
        } else {  db.query('SELECT price,starts_at,lat_origin,lng_origin,lat_destiny,lng_destiny,employee_id,company_id,status FROM orders WHERE email='
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

    controller.statusOrderQuery = function (data, callback) {
      if(db) {
        db.query('UPDATE orders SET status=' +db.escape(data.status)
                +' WHERE id ='+db.escape(data.id), function (error, result){
          if(error) {
            throw error;
          } else {
            callback({'success':true})
          }
        })
      }
     }

     controller.assignEmployeeQuery = function (data, callback) {
       if(db) {
         db.query('UPDATE orders SET employee_id=' +db.escape(data.employee_id)
                 +' WHERE id ='+db.escape(data.id), function (error, result){
           if(error) {
             throw error;
           } else {
             callback({'success':true})
           }
         })
       }
      }
      controller.updateOriginCoordinatesQuery = function (data, callback) {
        if(db) {
          db.query('UPDATE orders SET lat_origin=' +db.escape(data.lat_origin)+',lng_origin = '+db.escape(data.lng_origin)
                  +' WHERE id ='+db.escape(data.id), function (error, result){
            if(error) {
              throw error;
            } else {db.query('SELECT * FROM orders WHERE id='
                      +db.escape(data.id) ,function (error, result){
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

       controller.updateDestinyCoordinatesQuery = function (data, callback) {
         if(db) {
           db.query('UPDATE orders SET lat_destiny=' +db.escape(data.lat_destiny)+',lng_destiny = '+db.escape(data.lng_destiny)
                   +' WHERE id ='+db.escape(data.id), function (error, result){
             if(error) {
               throw error;
             } else {db.query('SELECT * FROM orders WHERE id='
                       +db.escape(data.id) ,function (error, result){
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

      controller.startOrderQuery = function (data, callback) {
        if(db) {
          db.query('UPDATE orders SET lat_origin='+db.escape(data.lat_origin)+',lng_origin = '+db.escape(data.lng_origin)
                  +',starts_at ='+db.escape(data.starts_at)+',status = 2 WHERE id ='+db.escape(data.id), function (error, result){
            if(error) {
              throw error;
            } else { db.query('SELECT * FROM orders WHERE id='
                              +db.escape(data.id) ,function (error, result){
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

  controller.finishOrderQuery = function (data, callback) {
       if(db) {
         db.query('UPDATE orders SET ends_at=' +db.escape(data.ends_at)
                 +', status = 3 WHERE id ='+db.escape(data.id), function (error, result){
           if(error) {
             throw error;
           } else {db.query('SELECT * FROM orders WHERE id='
                     +db.escape(data.id) ,function (error, result){
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

  controller.cancelOrderQuery = function (data, callback) {
        if(db) {
          db.query('UPDATE orders SET status = 0 WHERE id ='+db.escape(data.id), function (error, result){
            if(error) {
              throw error;
            } else {
              db.query('SELECT * FROM orders WHERE id='
                        +db.escape(data.id) ,function (error, result){
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





module.exports = controller;
