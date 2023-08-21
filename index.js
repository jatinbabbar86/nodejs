const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const https = require('https');
app.use(express.static(path.join(__dirname,'public')));

const compression = require('compression');

const adminRoutes = require('./routes/admin');
const dashboardRoutes = require('./routes/dashboard');
const errorController = require('./controllers/error');
const productcontroller = require('./controllers/products');

const privateKey = fs.readFileSync('server.key');
const certificate = fs.readFileSync('server.cert');

app.use(compression());

const db = require('./utilities/database');

db.execute('select * from products')
    .then( result => {
        console.log(result);
    })
    .catch();

// console.log(products);

app.use(bodyParser.urlencoded({extended: false})); //Parse data
app.use('/admin',adminRoutes); // Admin Routes
app.use('/admin',dashboardRoutes); //Dashboard Routes
app.get('/', productcontroller.home ); // Home page

app.use(errorController.get404); // 404 Page

// https
//     .createServer({key: privateKey, cert: certificate}, app)
//     .listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

app
    .listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});