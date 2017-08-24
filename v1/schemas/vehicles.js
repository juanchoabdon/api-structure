var schema = {};

schema.createVehicle=
{
  type: {
    presence: true
  },
  plate: {
    presence: true
  },
  loading_capacity: {
    presence: true
  },
  capacity_employees: {
    presence: true
  },
  passengers: {
    presence: true
  },
  status: {
    presence: true
  },
  employee_id: {
    presence: true
  },
  company_id: {
    presence: true
  }
}

schema.updateVehicle=
{
  id: {
    presence: true
  },
  type: {
    presence: true
  },
  plate: {
    presence: true
  },
  loading_capacity: {
    presence: true
  },
  capacity_employees: {
    presence: true
  },
  passengers: {
    presence: true
  },
  status: {
    presence: true
  },
  employee_id: {
    presence: true
  },
  company_id: {
    presence: true
  }
}
schema.deleteVehicle=
{
  id: {
    presence: true
  }
}

module.exports = schema;
