const mongoose = require('mongoose');
//Schema Validation

//Schema
var userModel = mongoose.Schema({
    firstname: {type: String,required:true},
    lastname: String,
    email: {type:String,required:true,lowercase:true,trim:true},
    age: {type:Number,min:1,max:100,default:15},
    status: {type:String,enum:["active","pending"],required:true},
    created_date: {type:Date,default: Date.now}
});

//Model
var user = mongoose.model("users",userModel);
module.exports = user;