const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
  id:{type:String,unique:true},
  title:{type:String},
  orderCount:{type:String},
  positiveRate:{type:String},
  imgUrl:{type:String}
},{
  collection: 'serv'
})

module.exports = mongoose.model('service',serviceSchema)
