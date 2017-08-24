var schema ={};


schema.createEmployee =
{
  first_name : {
   presence: true
  },
  last_name : {
   presence: true
  },
  email : {
   presence: true
  },
  mobile_phone : {
   presence: true
  },
  age : {
   presence: true
  },
  company_id: {
   presence: true
  }
}

schema.updateEmployee=
{
  first_name : {
   presence: true
 },
 last_name : {
   presence: true
 },
 email : {
   presence: true
 },
 mobile_phone : {
   presence: true
 },
 age : {
   presence: true
 },
 type: {
   presence: true
 },
 license : {
   presence: true
 },
 status : {
   presence: true
 },
 company_id: {
   presence: true
 }
}

schema.login=
{
  first_name : {
   presence: true
  },
  last_name : {
   presence: true
  },
  email : {
   presence: true
  },
  mobile_phone : {
   presence: true
  },
  age : {
   presence: true
  },
  type: {
   presence: true
  },
  license : {
   presence: true
  },
  status : {
   presence: true
  },
  company_id: {
   presence: true
  }

}
schema.deleteEmployee =
{
  id: {
    presence: true
  }
}

schema.ordersEmployee =
{
id : {
  presence: true
}

}

schema.statusEmployee =
{
id: {
  presence: true
},
status: {
  presence: true
}

}

module.exports = schema;
