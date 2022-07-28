const fs = require("fs"),
  httpStatus = require("http-status-codes"),
  utils = require("./utils");
const contentTypes = require("./contentTypes");


const routes = {
  "GET": {},
  "POST":{}
};

// リクエストを処理するハンドル関数
exports.handle = (req,res) => {
  try {
    routes[req.method][req.url](req,res);
  }catch(e){
    res.writeHead(httpStatus.StatusCodes.OK, contentTypes.html);
    utils.getFile("views/error.html",res);
  }
};

