var express = require('express');
var router = express.Router();

const aminals = [
  {type: 'parrot', name: 'cookie'},
  {type: 'elephant', name: 'killer'},
  {type: 'pangolin', name: 'precious'}
]

/* and then there were animals. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(aminals));
});

module.exports = router;
