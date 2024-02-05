const url = require('url');

// Function to handle requests
const handleRequest = (req, res) => {
  // Log the request method and URL
  console.log(`${req.method} ${req.url}`);

  // Parse the URL
  const parsedUrl = url.parse(req.url, true);

  // Routing
  if (parsedUrl.pathname === '/') {
    // Root route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the root page!\n');
  } else if (parsedUrl.pathname === '/about') {
    // About route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the about page. Created by Muhammad Talha Saleem\n');
  } else {
    // Handle 404 for non-existing routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
};

module.exports = {
  handleRequest,
};
