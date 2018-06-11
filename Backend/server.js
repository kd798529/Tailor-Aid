require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const {
PORT,
DBUSER,
DBPASSWORD
} = process.env

server.use(cors());
server.use(morgan('combined'));

server.use(bodyParser.json());

/*            -------------Routes------------------           */

server.get('/', (req, res) => {
	res.status(200).json({message: 'welcome'})
})

// This runs all the customer related routes
const customerRoutes = require('./Customers/routes/customerRoutes');
customerRoutes(server);



/*---------------------Server Port connection -------------------------*/
   //PORT = process.env.PORT || 5051;
  const port = server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


/*---------------------Database Connection-----------------------------*/

mongoose.Promise = global.Promise;
//const dbpath = `mongodb://${DBUSER}:${DBPASSWORD}@ds263639.mlab.com:63639/tailoraid`;
const dbpath = 'mongodb://localhost:27017/customers'
mongoose.connect(dbpath)
.then(function(){
    console.log('Database is connected');
})
.catch(function(err){
    console.log('Database Connection Failed')
}) 