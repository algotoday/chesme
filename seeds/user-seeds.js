const casual = require('casual');
const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [];
for(var i=0; i <=10;i++){
  const username= casual.username
  const password= casual.password
  const email= casual.email 
  userdata.push({username,email,password})
}

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
