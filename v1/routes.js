
var express = require('express');
require('express-group-routes');
var router = express.Router();

var ordersController = require('./controllers/orders');
var employeesController = require('./controllers/employees');
var companiesController = require('./controllers/companies');
var vehiclesController = require('./controllers/vehicles');



router.group('/orders', (router) => {

  router.get("/:id", ordersController.getOrder);
  router.post("/", ordersController.createOrder);
  router.post("/update", ordersController.updateOrder);
  router.get("/delete/:id", ordersController.deleteOrder);
  router.post("/employee", ordersController.assignEmployee);
  router.post("/update/coordinates/origin", ordersController.updateOriginCoordinates);
  router.post("/update/coordinates/destiny", ordersController.updateDestinyCoordinates);
  router.post("/start", ordersController.startOrder);
  router.post("/finish", ordersController.finishOrder);
  router.post("/cancel", ordersController.cancelOrder);

});

router.group('/employees', (router) => {

  router.post("/", employeesController.createEmployee);
  router.post("/update", employeesController.updateEmployee);
  router.get("/delete/:id", employeesController.deleteEmployee);
  router.post("/login", employeesController.loginEmployee);
  router.post("/status", employeesController.statusEmployee);


 router.group('/orders', (router) => {

  router.get("/new/:id", employeesController.employeeNewOrders );
  router.get("/active/:id", employeesController.employeeActiveOrders );
  router.get("/finished/:id", employeesController.employeeFinishedOrders );
  router.post("/status",ordersController.statusOrder );

  });

});

router.group('/companies', (router) => {

  router.post("/", companiesController.createCompany);
  router.post("/update", companiesController.updateCompany);
  router.get("/delete/:id", companiesController.deleteCompany);
  router.post("/login", companiesController.loginCompany);
  router.get("/employees/:id", companiesController.getEmployees);
  router.get("/orders/:id", companiesController.getOrders);

});

router.group('/vehicles', (router) => {

  router.post("/", vehiclesController.createVehicle);
  router.post("/update", vehiclesController.updateVehicle);
  router.get("/delete/:id", vehiclesController.deleteVehicle);

});

module.exports = router;
