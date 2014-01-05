var http = require('http'),
	gitweb = require('gitweb'),
	path = require('path');

var port = process.env.PORT || 80;

var config = {
	"projectroot": path.join(__dirname, '..'),
	"sitename": "git browser"
};

http.createServer(gitweb('/', config)).listen(port);
console.log('listenning on port %d', port);

