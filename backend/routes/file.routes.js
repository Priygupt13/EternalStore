const { authJwt } = require("../middleware");
const controller = require("../controllers/file.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/file/admin/list", [authJwt.verifyToken, authJwt.isAdmin], controller.getFilesForAdmin);
  app.get("/api/file/list", [authJwt.verifyToken], controller.getFiles);
  app.get("/api/file/download", [authJwt.verifyToken], controller.downloadFile);

  app.post("/api/file/create", [authJwt.verifyToken], controller.createFile);
  app.post("/api/file/update", [authJwt.verifyToken], controller.updateFile);
  
  app.delete("/api/file/delete", [authJwt.verifyToken], controller.deleteFile);
};