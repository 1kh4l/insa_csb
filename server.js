/* REQUIRED NPM MODULES */
const express    = require('express'),
      mongoose   = require('mongoose'),
      bodyParser = require('body-parser'),
      path       = require('path'),
      cors       = require('cors'),
      app        = express();
/* ROUTING CONFIG */
const baseRoutes = require('./Controller/Routes/base.routes');
/* ADDITIONAL CONFIG */
const db = 'mongodb://localhost:27017/insaDB';
const port = 4000; // EXPRESS API PORT
/* MONGOOSE CONNECTION */
mongoose.connect(db, { useNewUrlParser: true }).then(()=> {
    console.log('Successfully connected to insaDB')
}, err => {
    console.log('Error during database connection!'+ err);
});
/* APP SETTINGS */
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

/* SETTING UP ROUTES */
app.use('/',baseRoutes);
app.listen(port, (error)=> {
    if (!error) {
        console.log('Listening on port: ' + port);
    } else {
        console.log('Error found');
    }
});
