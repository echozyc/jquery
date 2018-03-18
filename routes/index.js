var express = require('express');
var router = express.Router();

/* GET home page. */

const shopmodule = require('../module/shops')
const servmodule = require('../module/serv')
const thirdmodule = require('../module/thirds')

router.get('/getshoplist',function (req,res) {
  shopmodule.find({},function (err,list) {
    if(!err){
      res.send({list:list})
    }
  })
})
router.get('/getservlist',function (req,res) {
  servmodule.find({},function (err,list) {
    if(!err){
      res.send({list:list})
    }
  })
})

//分页查询
router.get('/getcomments',function (req,res) {
  const page = req.query.page
  //分页查询公式
  // find().limit(每页显示条数).skip((页数-1)*(每页显示条数)).exec
  thirdmodule.find({}).limit(10).skip((page-1)*10).exec(function (err,list) {
    if(!err){
      res.send({list:list})
    }
  })
})

module.exports = router;
