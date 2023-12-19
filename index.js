// Import project libraries
const express = require('express');
const app = express();

// Import routes
const schedulesRoute = require('./routes/schedulesRoute');
const paymentRoute = require('./routes/paymentRoute');
const passAssociationRoute = require('./routes/passAssociationRoute');
const loginRoute = require('./routes/loginRoute');
const registryRoute = require('./routes/registryRoute');
const passVisualizationRoute = require('./routes/passVisualizationRoute');
const feedbackRoute = require('./routes/FeedbackRoute');
// Other constants
const PORT = 3000;

// App variables configuration
app.set('views', `${__dirname}/views`)
app.set('views engine', 'ejs')

// Setup for analysing form data
app.use(express.urlencoded({ extended : true }));

// App routes configuration
app.use('/public', express.static('public'));
app.use(schedulesRoute);
app.use(paymentRoute);
app.use(passAssociationRoute);
app.use(loginRoute);
app.use(registryRoute);
app.use(passVisualizationRoute);
app.use(feedbackRoute);

app.listen(PORT, console.log(`Listenning at port ${ PORT }`));