const fs = require("fs"),
  httpStatus = require("http-status-codes"),
  contentTypes = require("./contentTypes");

// ファイルを読んでレスポンスを返す
module.exports = {
  getFile: (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
      if (error) {
        res.writeHead(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR, contentTypes.html);
        res.end("There was an error serving content!")
      }
      res.end(data)
    });
  }
}
