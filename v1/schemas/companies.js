var schema = {};

schema.createCompany =
{
  name : {
    presence: true
  },
  email : {
    presence: true
  },
  mobile_phone: {
    presence: true
  }
}
schema.updateCompany=
{
 name : {
   presence: true
 },
 email : {
   presence: true
 },
 mobile_phone: {
   presence: true
 }
}

schema.loginCompany =
{
  email : {
    presence: true
  }
}

schema.deleteCompany =
{
  id: {
    presence: true
  }
}

schema.getEmployees =
{
  id: {
    presence: true
  }
}
schema.getOrders =
{
  id: {
    presence: true
  }
}

module.exports = schema;
