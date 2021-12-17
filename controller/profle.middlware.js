const mysql = require('mysql');



let myLogger = function (req, res, next) {
    // console.log("A new request received at " + Date.now());
        next()
}
  module.exports =  myLogger
