
var mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    budget: Number
});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);