const axios = require('axios');

const customer = {
     firstname: 'John',
     lastname: 'Mike',
    email:'john@gmail.com',
};

axios
    .post('http://localhost:3000/customers', customer)
    .put('http://localhost:3000/customers/15', customer)
    .delete('http://localhost:3000/customers/15')
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

