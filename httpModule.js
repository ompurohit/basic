const http = require('http');
const server = http.createServer((request, response) => {
	response.setHeader("content-type","text/html");
	if(request.url == "/"){
		response.statusCode = 200;
		response.write("<h2>Hello from node js server</h2>");
	} else if (request.url == "/hello"){
		response.write("<h1>Hello from node</h1>");
	}
	response.end();
});
server.listen(3000, () => console.log("server running from http://localhost:3000"));
