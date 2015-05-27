var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res) {
  res.send(req.body.name);
});
router.get('/hello',function(req,res){
  res.send('Welcome in World');
});
router.get('/arr',function(req,res){
  res.send(['Noamn','Farrukh','Usama','Awais']);
});
router.get('/student',function(req,res){
  res.json([{
              name: "Hammad",
              class: "VIII"
              },
              {
              name: "Shayan",
              class:"V"
              },
              {
              name:"Uzair",
              class:"X"
              }
            ]);
});
module.exports = router;
