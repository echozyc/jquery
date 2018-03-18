/**
 * Created by 10065 on 2018/3/16.
 */
require('./todos/db.js')
const service = require('./module/thirds')

// service.find({},function (err,data) {
//   console.log(data)
// })

service.find({}).limit(10).skip(1).exec(function (err,data) {
  if(!err){
    console.log(data)
  }
})