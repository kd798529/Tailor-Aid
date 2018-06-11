const {
    createCustomer,
    getCustomer,
    getCustomers,
    deleteCustomer,
    updateCustomer
} = require('../controller/customercontroller');

module.exports = (server) => {
    server.post('/api/customer', createCustomer);
    server.get('/api/customer/:id', getCustomer);
    server.get('/api/customers', getCustomers);
    server.delete('/api/customer/:id', deleteCustomer);
    server.put('/api/customer/:id', updateCustomer);
};