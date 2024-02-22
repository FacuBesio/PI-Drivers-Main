const { validate } = require("uuid");

const getDriverById =  (id) => {

      //* DRIVER DB
      const uuidValidate = validate(id.toString());
      if (uuidValidate) {
        
      }
      
   
  };
  
  module.exports = getDriverById;