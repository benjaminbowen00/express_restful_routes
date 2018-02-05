const express = require('express');
const filmRouter = new express.Router();


//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

// var films = new Films();

//index
filmRouter.get('/', function(req, res){
  res.json({data: films});
});

//create
filmRouter.post('/', function(req, res){
  films.push(req.body);
  res.json({data: films});
});

//show
filmRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]})
});

//update
filmRouter.put('/:id', function(req, res){
  films[req.params.id] = req.body;
  res.json({data: films});
});

//destroy
filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});

//show reviews (for one film)
filmRouter.get('/:id/reviews', function(req, res){
  res.json(films[req.params.id].reviews)
})


//create another review for a particular film
filmRouter.post('/:id/reviews', function(req, res){
  films[req.params.id].reviews.push(req.body);
  res.json(films);
})


module.exports = filmRouter;
