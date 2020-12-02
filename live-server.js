var liveServer = require("live-server");
const path = require('path');

var params = {
	port: 8181, // Set the server port. Defaults to 8080.
	host: "127.0.0.1", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
	root: path.join(__dirname, '/public'), // Set root directory that's being served. Defaults to cwd.
	open: true, // When false, it won't load your browser by default.
	ignore: '_pgbackup', // comma-separated string for paths to ignore

	wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
	mount: [
		//    ['/paxl', path.join(__dirname, '/node_modules/paxl/dist')], // Mount a directory to a route.
  ], // Mount a directory to a route.
	logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
	//middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);
