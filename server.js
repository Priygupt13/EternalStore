var express = require('express');
var path = require('path');

var publicDir = path.join(__dirname,'public');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.frontend_dir = path.join(__dirname,'./frontend/build');

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.static(this.frontend_dir));
    }

    routes() {
        // Catch all requests that don't match any route
        this.app.get("*", (req, res) => {
            res.sendFile(
                path.join(this.frontend_dir, "index.html")
            );
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port: ", this.port);
          });
    }
}

const server = new Server();
server.listen();

module.exports = Server;
