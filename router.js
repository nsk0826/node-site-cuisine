const
  httpStatus = require("http-status-codes"),
  utils = require("./utils");
const contentTypes = require("./contentTypes");


const routes = {
  "GET": {},
  "POST": {}
};

// リクエストを処理するハンドル関数
exports.handle = (req, res) => {
  try {
    routes[req.method][req.url](req, res);
  } catch (e) {
    res.writeHead(httpStatus.StatusCodes.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
  }
};

// 経路関数をマップする getとpost
exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};