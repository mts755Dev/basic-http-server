# Basic HTTP Server

This project is a simple Node.js HTTP server that handles web requests. It includes routing for the root ("/") and the about ("/about") pages, as well as error handling for non-existing routes.

## Getting Started

To run the server, follow these steps:

1. Make sure you have Node.js installed on your machine. If not, you can download it [here](https://nodejs.org/).

2. Clone this repository to your local machine or download the source code as a ZIP file.

3. Open a terminal and navigate to the directory where the project is located.

4. Run the following command to start the server:

   ```bash
   node index.js
   ```

5. The server will start listening on port 3000. You can access it in your web browser at `http://localhost:3000`.

## Routes

- **Root ("/"):** Displays a welcome message.

- **About ("/about"):** Displays information about the project or creator.

## Error Handling

The server handles non-existing routes with a 404 status code.

## Logging

Every request method and URL are logged to the console.

## Dependencies

This project has no external dependencies.
