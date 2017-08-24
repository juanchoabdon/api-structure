const validate = require('validate.js');
const schema = require('../schemas/companies')
const responses = require('../../utils/responses')
const queries = require('../queries/companies')

var controller= {};


controller.createCompany = function (req, res) {
  const validation = validate(req.body , schema.createCompany, { format: 'flat' });
   if(!validation) {
    queries.createCompanyQuery(req.body, function (response) {
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


  controller.updateCompany = function(req, res) {
  const validation = validate(req.body , schema.updateCompany, { format: 'flat' });
    if(!validation) {
   queries.updateCompanyQuery(req.body, function (response) {
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



   controller.deleteCompany = function(req, res) {
     const validation = validate(req.params , schema.deleteCompany, { format: 'flat' });

     if(!validation) {
      queries.deleteCompanyQuery(req.params, function (response) {
            responses.successWithData( (result) => {
              res.status(200).send(result)
            })
          })
     } else {
            responses.error(validation, (response) => {
              res.status(500).send(response)
            })
        }
     }

    controller.loginCompany = function(req, res) {
         const validation = validate(req.body , schema.loginCompany, { format: 'flat' });
             if(!validation) {
          queries.loginCompanyQuery(req.body, function (response) {
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

    controller.getEmployees = function(req, res) {
         const validation = validate(req.params , schema.getEmployees, { format: 'flat' });
             if(!validation) {
          queries.getEmployeesQuery(req.params, function (response) {
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

    controller.getOrders = function(req, res) {
         const validation = validate(req.params , schema.getOrders, { format: 'flat' });
             if(!validation) {
          queries.getOrdersQuery(req.params, function (response) {
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
