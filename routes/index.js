var express = require('express');
var router = express.Router();
var Heros = require('../models/heros');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Super Heros' });
});

   router.get('/saveData',function	(req, res, next)
   {
      Heros.saveNew(req.query)
      .then(function(){
      	res.redirect('/getAllHeros');
      })

    //  res.render('heros',{data: Heros.getAll()})
      .catch(console.log('ERR :: in resolving the promise'))
      
   }); 

   router.get('/getAllHeros',function(req, res, next)
   {
      Heros.getAll()
      .then(function(retVal){
      res.render('heros',{data: retVal})
  })
      .catch(console.log('ERR :: in resolving the promise'))

   });

    router.get('/delete',function	(req, res, next)
   {
      Heros.delete(req.query)
      .then(function(){
      	res.redirect('/getAllHeros');
      })

    //  res.render('heros',{data: Heros.getAll()})
      .catch(console.log('ERR :: in resolving the promise'))
      
   }); 

    router.get('/viewHero', function(req, res, next) {
	Heros.viewHero(req.query)
	.then(function(retVal){
		res.render('viewheros',{data: retVal});	
	})
	.catch(console.log('Err: in resolving the promise'));
  
});



module.exports = router;
