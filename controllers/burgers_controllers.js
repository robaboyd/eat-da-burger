const express = require('express');

const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
  console.log('getting');
  burger.all((data) => {
    console.log(data);
    res.render('index', { burgers: data });
  });
});


router.post('/create', (req, res) => {
  burger.create(req.body.burger_name, (result) => {
    console.log(result);
    res.redirect('/');
  });
});


router.put('/:id', (req, res) => {
  burger.update(req.params.id, (result) => {
    console.log(result);

    res.sendStatus(200);
  });
});
module.exports = router;
