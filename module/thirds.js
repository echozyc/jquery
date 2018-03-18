const mongoose = require("mongoose")
const thirdSchema = new mongoose.Schema({
  iconUrl:{type:String},
  area:{type:String},
  city:{type:String},
  comment:{type:String},
  createtime:{type:Number},
  nick:{type:String},
  star:{type:Number},
},{
  collection:"thirds"
})
module.exports = mongoose.model('third',thirdSchema)