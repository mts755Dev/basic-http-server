const http = require('http');
const { handleRequest } = require('./routes/routes');

// Create an HTTP server
const server = http.createServer(handleRequest);

// Set the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
