var express=require("express");
var accepts = require('accepts');
var app=express();

app.get('/', function(req, res){


  let accept = accepts(req);
  let userAgentStr = req.get("User-Agent");
  let start=userAgentStr.indexOf("(");
  let end=userAgentStr.indexOf(")");
  let sysStr=userAgentStr.substring(start+1, end);
  let result={ "ip":req.ip, "language": accept.language, "system": sysStr};
  res.json(result);
});

app.listen(3000);
