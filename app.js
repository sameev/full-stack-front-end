const http = require('http');

http.createServer( (req, res) => {
	res.write('On the way to being a FS Engineer');
	res.end();
}).listen(3000);

console.log('Server started on port 3000');
