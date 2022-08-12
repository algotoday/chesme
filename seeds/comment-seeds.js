const casual = require('casual');
const { Comment } = require('../models');

const commentdata = [];
for(var i=0; i <=100; i++){
  const comment_text= casual.short_description
  const user_id= casual.random_value({ a: 1, b: 2, c:3,  d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 });
  const post_id= casual.random_value({ a: 1, b: 2, c:3,  d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25,});
  commentdata.push({comment_text,post_id,user_id})
}

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
