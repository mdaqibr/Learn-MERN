// Create server from scratch...

/*
1. request.url: The URL of the request. This includes the path and any query string that was sent with the request.
2. request.method: The HTTP method used for the request (e.g., GET, POST, PUT, DELETE, etc.).
3. request.headers: An object containing the headers of the request. This includes metadata about the request, such as Content-Type, User-Agent, Accept, etc.
4. request.httpVersion: The HTTP version used for the request (e.g., '1.1', '2.0').
5. request.socket: The underlying socket object that is used for the connection. This provides information about the connection, such as remote address and port.
6. request.connection: Similar to `request.socket`, this provides information about the connection.
7. request.complete: A boolean indicating whether the request has been fully received.
8. request.trailers: An object containing the trailers of the request, if any.
9. request.setTimeout(): A method to set the timeout for the request.
10. request.on(): A method to listen for specific events emitted by the request object, such as 'data', 'end', 'error', etc.
11. request.pipe(): A method to pipe the incoming request data to a writable stream.
*/


const http = require("http"); // To make http request and handle http in node js.
const file = require("fs");
const url = require("url");

const server = http.createServer((request, response) => {
  const clientIp = request.socket.remoteAddress; // Get the client's IP address
  const log = `${ Date.now() }: requested for ${ request.url } from IP: ${ clientIp }.\n`;

  if (request.url == '/favicon.ico') return response.end(); // It is requested by client(browser) bydefault.

  // Use url package to parse URL: https://www.npmjs.com/package/url

  const myUrl = url.parse(request.url, true); // true value is used to get the query data in the hash form and it is optional.
  console.log(myUrl);
  /*
    Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: '?user_name=prince',
      query: [Object: null prototype] { user_name: 'prince' },
      pathname: '/about-us/',
      path: '/about-us/?user_name=prince',
      href: '/about-us/?user_name=prince'
    }
  */
  console.log(myUrl.pathname); // Path
  console.log(myUrl.path); // Path After domain
  console.log(myUrl.query); // Query URL

  file.appendFile('logs.txt', log, (error, data) => { 
    switch(myUrl.pathname) {
      case "/":
        response.end("This is our homepage.");
        break;
      case "/about-us/":
        const res = `Hey, ${ myUrl.query.user_name }`
        console.log(res);
        response.end(res);
        break;
      default: 
        response.end("404 - page not found");
    }
  })
})

server.listen(8000, () => console.log("Server started successfully."))
