const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// returns all comments from a specific user
router.get('/:id', (req, res)=>{
  Comment.findAll({
      where: {
          user_id: req.params.id
      }
  }).then(dbCommentData => {
      if(!dbCommentData){
          res.status(404).json({ message: 'No comments found from this user' });
          return;
      }
      res.json(dbCommentData);
  })
  .catch(err=>{
      console.log(err);
      res.status(500).json(err);
  })
});

router.post('/', withAuth, (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', withAuth, (req, res)=>{
  Comment.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbCommentData=>{
    res.json(dbCommentData)
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err)
  });
});

router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
