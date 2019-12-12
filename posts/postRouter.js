const express = require('express');
const db = require('./postDb');
const router = express.Router();
const {validatePostId} = require('./../middleware/validate')

router.get('/', (req, res) => {
  // do your magic!
  db.get()
    .then(response =>{
      res.status(200).json({
        message: 'Get Successful',
        posts: response
      })
    }).catch(eror => {
      res.status(500).send({
        message: 'Server Error'
      })
    })

});

router.get('/:id', validatePostId(), (req, res, next) => {
  // do your magic!
  res.status(200).json({
    message: 'Successful ',
    post: req.post
  })
});

router.delete('/:id', validatePostId(), (req, res) => {
  const id = req.id;

  db.remove(id)
    .then(deleteResponse => {
      if(deleteResponse.length <= 0 ){
        res.status(500).json({
          messaage: `Couldn't Delete post at ${id}`
        })
      }else{
        res.status(200).json({
          message: `Successfully deleted post at ${id}`
        })
      }
    })
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

// function validatePostId(req, res, next) {
//   // do your magic!
// }

module.exports = router;
