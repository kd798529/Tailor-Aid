const Customer =  require('../models/customerModel');

const createCustomer = (req,res) => {
    const customerInfo = req.body;
    const customer = new Customer(customerInfo);
    customer.save()
    .then((newCustomer) => {
        res.status(201).json(newCustomer);
    })
    .catch(() => {
        res.status(500).json({message: 'there was an error while saving the customer to the database'})
    })
    
  };

  const getCustomers = (req, res) => {
      Customer.find({ })
      .then((customers) => {
          res.status(201).json(customers);
      })
      .catch((error) => {
          res.status(501).json({error: 'the information cannot be retrieved'});
      })
  }

  const getCustomer = (req,res) => {
    const { id } = req.params;
    Customer.findById(id)
    .then((customer) => {
        res.status(201).json(customer);
    })
    .catch(error => {
        res.status(500).json({ error: 'the customer cannot be retrieved'});
    })
  };

  const deleteCustomer = (req, res) => {
      const id = req.params.id;

      Customer.findByIdAndRemove(id)
      .then((customer) => {
          res.status(200).json({ message: 'Customer has been deleted!'})
      })
      .catch((error) => {
          res.status(500).json({message: 'the information can not be deleted because it is not valid' })
      })
  };

  const updateCustomer = (req, res) => {
      const id = req.params.id;
      const customerinfo = req.body;

      Customer.findByIdAndUpdate(id, customerinfo)
      .then(customer => {
          res.status(200).json({message: 'customer has been updated'})
      })
      .catch(error => {
          res.status(500).json({message: 'the information cannot be updated because it is invalid'})
      })
  }

  module.exports = {
      createCustomer,
      getCustomer,
      getCustomers,
      deleteCustomer,
      updateCustomer
  };