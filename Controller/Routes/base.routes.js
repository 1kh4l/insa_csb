// localhost:4000/<Route>

const Router = require('express').Router(),
      Item   = require('../../Model/item.model');

Router.get('/items', (req, res) => {
    Item.find((err, all) => {
        if (err) {
            console.log(err);
        } else {
            res.send(all);
        }
    });
});


module.exports = Router;
