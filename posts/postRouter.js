const express = require('express');
const db = require('./postDb');
const router = express.Router();
const {validatePostId , validatePost} = require('./../middleware/validate')

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

router.put('/:id', validatePost(), (req, res, next) => {
  // do your magic!
  const id = req.id;
  const post = req.post
  db.update(id, post)
    .then(updateResponse => {
      if(updateResponse === 0){
        res.status(500).json({
          messaage: `Couldn't find post at ${id}`
        })
      }else{
        res.status(201).json({
          message: 'Successfully updated'
        })
      }
    })

});

router.post('/', validatePost(), (req, res, next) => {
    const post = req.post
    db.insert(post)
      .then(postResponse => {
        res.status(201).json({
          "Message" : "Successfully Created",
          "Post" : postResponse
        })
      })
      .catch( error => {
        res.status(500).json({
          "Message" : "Server error",
        "Errorx" : error})
      })
    })

module.exports = router;
