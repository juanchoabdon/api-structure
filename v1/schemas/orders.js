var schema = {};

schema.createOrder =
{

  lat_destiny : {
    presence: true
  },
  lng_destiny : {
    presence: true
  },
  employee_id : {
    presence: true
  },
  company_id : {
    presence: true
  }
}
schema.updateOrder =
{
  id: {
    presence: true
  },
  price : {
    presence: true
  },
  starts_at: {
   presence: true
  },
  lat_origin : {
    presence: true
  },
  lng_origin : {
    presence: true
  },
  lat_destiny : {
    presence: true
  },
  lng_destiny : {
    presence: true
  },
  employee_id : {
    presence: true
  },
  company_id : {
    presence: true
  },
  status : {
    presence: true
  }
 }

schema.deleteOrder =
{
  id: {
    presence: true
  }
}

schema.statusOrder =
{
id: {
  presence: true
},
status: {
  presence: true
}

}

schema.assignEmployee =
{
id: {
  presence: true
},
employee_id: {
  presence: true
}

}

schema.updateOriginCoordinates =
{
id: {
  presence: true
},
 lat_origin: {
  presence: true
},
lng_origin:{
 presence: true
}

}

schema.updateDestinyCoordinates =
{
id: {
  presence: true
},
 lat_destiny: {
  presence: true
},
lng_destiny:{
 presence: true
}

}

schema.startOrder =
{
id:{
  presence: true
},
starts_at: {
 presence: true
},
 lat_origin: {
  presence: true
},
lng_origin:{
 presence: true
}

}

schema.finishOrder =
{
id:{
  presence: true
},
ends_at: {
 presence: true
}
}

schema.cancelOrder =
{
id:{
  presence: true
}

}


module.exports = schema;
