const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body><h1>Hello!</h1></body>");
    res.write("<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
    );
    res.write("</html>");
    return res.end();
  }
  const body = [];
  if (url === "/create-user" && method === "POST") {
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body><h1>User Created!</h1></body>");
    res.write("</html>");

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
  }

  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
  });
});

server.listen(3000);
