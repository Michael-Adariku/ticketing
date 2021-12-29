const mysql = require('mysql');



let myLogger = function (req, res, next) {
    // console.log("trying to access the profile")
        next()
}
  module.exports =  myLogger
