var responses = {};


responses.successWithData = (data, callback) => {
   const response = {};
   response.success = true;
   response.data = data;
   return callback(response)
}

responses.success = (callback) => {
   const response = {};
   response.success = true;
   return callback(response)
}

responses.error = (message_error, callback) => {
  const response = {};
  response.success = false;
  response.message_error = message_error;
  return callback(response)
}



module.exports = responses;
