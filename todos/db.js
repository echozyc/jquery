/**
 * Created by 10065 on 2018/3/16.
 */
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/daowei')

mongoose.connection.on('open',function () {
  console.log("数据库连接成功")
})
