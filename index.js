// Import project libraries
const express = require('express');
const session = require('express-session');

// Import routes
const schedulesRoute = require('./routes/schedulesRoute');
const paymentRoute = require('./routes/paymentRoute');
const passAssociationRoute = require('./routes/passAssociationRoute');
const loginRoute = require('./routes/loginRoute');
const registryRoute = require('./routes/registryRoute');
const passVisualizationRoute = require('./routes/passVisualizationRoute');

// Other constants
const PORT = 3000;
const ONEDAY = 24 * 60 * 60 * 1000;

// Initialize server
const app = express();

// App variables configuration
app.set('views', `${__dirname}/views`)
app.set('views engine', 'ejs')

// Setup for analysing form data
app.use(express.urlencoded({ extended: true }));

// Setup session variables
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: ONEDAY },
    resave: false
}));

// App routes configuration
app.use('/public', express.static('public'));
app.use(schedulesRoute);
app.use(paymentRoute);
app.use(passAssociationRoute);
app.use(loginRoute);
app.use(registryRoute);
app.use(passVisualizationRoute);

// Listen for requests
app.listen(PORT, console.log(`Listenning at port ${PORT}`));