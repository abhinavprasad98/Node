require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV;
const stage = ('/config')[environment];

require('./models/menus');
require('./models/waiters');
require('./models/dishes');
require('./models/order_items');
require('./models/customers');
require('./models/orders');
require('./models/chefs');
require('./models/payments');
require('./models/categories');

app.use(require('./routes'));
//const routes = require('/routes/index.js');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const connUri = process.env.MONGO_LOCAL_CONNECTION_URL;
mongoose.connect(connUri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
});


if(environment !== 'production') {
    app.use(logger('dev'));
}

//app.use('/api/rdb', routes(router));
app.post('/api/rdb', function (req, res, next) {
    console.log("===========");
    data = {
        name:"Abhinav"
    }

    res.status(200).json({
        data:data
    });
    next();
});

app.listen(3000, () => {
   console.log(`started ${3000}`);
}); 