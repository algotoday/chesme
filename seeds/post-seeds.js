const casual = require('casual');
const { Post } = require('../models');

const postdata = [];

for(var i =0; i <25;i++){
  const title= casual.title
  const post_text= casual.short_description
  const user_id= casual.random_value({ a: 1, b: 2, c:3,  d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 });
  postdata.push({title,post_text,user_id})
}
console.log(postdata)
const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
