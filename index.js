// Import project libraries
const express = require('express');
const app = express();

// Import routers
const schedulesRoute = require('./routes/schedulesRoute');
const paymentRoute = require('./routes/paymentRoute');
const passAssociationRoute = require('./routes/passAssociationRoute');

// Other constants
const PORT = 3000;

// App variables configuration
app.set('views', `${__dirname}/views`)

// App routes configuration
app.use('/public', express.static('public'));
app.use(schedulesRoute);
app.use(paymentRoute);
app.use(passAssociationRoute);

app.listen(PORT, console.log(`Listenning at port ${ PORT }`));