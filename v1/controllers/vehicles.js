const validate = require('validate.js');
const schema = require('../schemas/vehicles')
const responses = require('../../utils/responses')
const queries = require('../queries/vehicles')

var controller= {};


controller.createVehicle = function (req, res) {
  const validation = validate(req.body , schema.createVehicle, { format: 'flat' });
   if(!validation) {
    queries.createVehicleQuery(req.body, function (response) {
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


  controller.updateVehicle = function(req, res) {
  const validation = validate(req.body , schema.updateVehicle, { format: 'flat' });
    if(!validation) {
   queries.updateVehicleQuery(req.body, function (response) {
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



   controller.deleteVehicle = function(req, res) {
     const validation = validate(req.params , schema.deleteVehicle, { format: 'flat' });

     if(!validation) {
      queries.deleteVehicleQuery(req.params, function (response) {
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
