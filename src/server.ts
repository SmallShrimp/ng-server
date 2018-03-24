import errorHandler from "errorhandler";

import app from "./app";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

server.on('connection', function (socket) {
  console.log("A new connection was made by a client.");
  socket.setTimeout(30 * 1000);
  // 30 second timeout. Change this as you see fit.
});


export default server;