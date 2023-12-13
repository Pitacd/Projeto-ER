// Import project libraries
const express = require('express');
const app = express();

// Import routers
const schedulesRoute = require('./routes/schedulesRoute');
const paymentRoute = require('./routes/paymentRoute');

// Other constants
const PORT = 3000;

// App variables config
app.set('views', `${__dirname}/views`)

// App routes config
app.use('/public', express.static('public'));
app.use(schedulesRoute);
app.use(paymentRoute);

app.listen(PORT, console.log(`Listenning at port ${ PORT }`));