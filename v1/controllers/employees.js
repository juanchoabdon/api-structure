const validate = require('validate.js');
const schema = require('../schemas/employees')
const responses = require('../../utils/responses')
const queries = require('../queries/employees')

var controller= {};


controller.createEmployee = function (req, res) {
  const validation = validate(req.body , schema.createEmployee, { format: 'flat' });
   if(!validation) {
    queries.createEmployeeQuery(req.body, function (response) {
          responses.successWithData(response, (result) => {
            res.status(200).send(result)
          })
    })
  } else {
          responses.error(validation, (response) => {
            res.status(500).send(response)
           })
      }
  }


  controller.updateEmployee = function(req, res) {
  const validation = validate(req.body , schema.updateEmployee, { format: 'flat' });
    if(!validation) {
   queries.updateEmployeeQuery(req.body, function (response) {
         responses.successWithData(response, (result) => {
           res.status(200).send(result)
         })
       })
  } else {
         responses.error(validation, (response) => {
           res.status(500).send(response)
         })
       }
  }



   controller.deleteEmployee = function(req, res) {
     const validation = validate(req.params , schema.deleteEmployee, { format: 'flat' });

     if(!validation) {
      queries.deleteEmployeeQuery(req.params, function (response) {
            responses.successWithData(response, (result) => {
              res.status(200).send(result)
            })
          })
     } else {
            responses.error(validation, (response) => {
              res.status(500).send(response)
            })
       }
    }

   controller.loginEmployee = function(req, res) {
      const validation = validate(req.body , schema.loginEmployee, { format: 'flat' });
          if(!validation) {
         queries.loginEmployeeQuery(req.body, function (response) {
             responses.successWithData(response, (result) => {
               res.status(200).send(result)
             })
           })
      } else {
             responses.error(validation, (response) => {
               res.status(500).send(response)
             })
       }
   }

   controller.employeeActiveOrders = function(req, res) {
      const validation = validate(req.params , schema.ordersEmployee, { format: 'flat' });
          if(!validation) {
             req.params.status = 2;
             queries.ordersEmployeeQuery(req.params, function (response) {
                 responses.successWithData(response, (result) => {
                   res.status(200).send(result)
                 })
               })
          } else {
                 responses.error(validation, (response) => {
                   res.status(500).send(response)
                 })
           }
   }

   controller.employeeNewOrders = function(req, res) {
      const validation = validate(req.params , schema.ordersEmployee, { format: 'flat' });
          if(!validation) {
           req.params.status = 1;
           queries.ordersEmployeeQuery(req.params, function (response) {
               responses.successWithData(response, (result) => {
                 res.status(200).send(result)
               })
             })
          } else {
                 responses.error(validation, (response) => {
                   res.status(500).send(response)
                 })
           }
   }

   controller.employeeFinishedOrders = function(req, res) {
      const validation = validate(req.params , schema.ordersEmployee, { format: 'flat' });
          if(!validation) {
             req.params.status = 3;
             queries.ordersEmployeeQuery(req.params, function (response) {
                 responses.successWithData(response, (result) => {
                   res.status(200).send(result)
                 })
               })
          } else {
                 responses.error(validation, (response) => {
                   res.status(500).send(response)
                 })
           }
   }

   controller.statusEmployee = function(req, res) {
      const validation = validate(req.body , schema.statusEmployee, { format: 'flat' });
          if(!validation) {
         queries.statusEmployeeQuery(req.body, function (response) {
             responses.successWithData(response, (result) => {
               res.status(200).send(result)
             })
           })
      } else {
             responses.error(validation, (response) => {
               res.status(500).send(response)
             })
       }
   }


module.exports = controller;
