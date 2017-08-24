const validate = require('validate.js');
const schema = require('../schemas/orders')
const responses = require('../../utils/responses')
const queries = require('../queries/orders')

var controller= {};


controller.createOrder = function (req, res) {
  const validation = validate(req.body , schema.createOrder, { format: 'flat' });
   if(!validation) {
    queries.createOrderQuery(req.body, function (response) {
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



  controller.getOrder = function (req, res) {
    const validation = null;
     if(!validation) {
      queries.getOrderQuery(req.params, function (response) {
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



  controller.updateOrder = function(req, res) {
    const validation = validate(req.body , schema.updateOrder, { format: 'flat' });
      if(!validation) {
        queries.updateOrderQuery(req.body, function (response) {
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



  controller.deleteOrder = function(req, res) {
     const validation = validate(req.params , schema.deleteOrder, { format: 'flat' });

     if(!validation) {
      queries.deleteOrderQuery(req.params, function (response) {
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

     controller.statusOrder = function(req, res) {
        const validation = validate(req.body , schema.statusOrder, { format: 'flat' });
            if(!validation) {
           queries.statusOrderQuery(req.body, function (response) {
               responses.success((result) => {
                 res.status(200).send(result)
               })
             })
        } else {
               responses.error(validation, (response) => {
                 res.status(500).send(response)
               })
         }
     }

     controller.assignEmployee = function(req, res) {
        const validation = validate(req.body , schema.assignEmployee, { format: 'flat' });
            if(!validation) {
           queries.assignEmployeeQuery(req.body, function (response) {
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

     controller.updateOriginCoordinates = function(req, res) {
        const validation = validate(req.body , schema.updateOriginCoordinates, { format: 'flat' });
            if(!validation) {
           queries.updateOriginCoordinatesQuery(req.body, function (response) {
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

     controller.updateDestinyCoordinates = function(req, res) {
        const validation = validate(req.body , schema.updateDestinyCoordinates, { format: 'flat' });
            if(!validation) {
           queries.updateDestinyCoordinatesQuery(req.body, function (response) {
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

     controller.startOrder = function(req, res) {
        const validation = validate(req.body , schema.startOrder, { format: 'flat' });
            if(!validation) {
           queries.startOrderQuery(req.body, function (response) {
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

     controller.finishOrder = function(req, res) {
        const validation = validate(req.body , schema.finishOrder, { format: 'flat' });
            if(!validation) {
           queries.finishOrderQuery(req.body, function (response) {
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

     controller.cancelOrder = function(req, res) {
        const validation = validate(req.body , schema.cancelOrder, { format: 'flat' });
            if(!validation) {
           queries.cancelOrderQuery(req.body, function (response) {
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
