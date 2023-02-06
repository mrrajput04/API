const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";

const port = 3000;



const x = (data) => {
  const b = new Buffer.from(data, "utf-8").toString();
  fs.writeFile("employee.json", b, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("data entered successfully");
    }
  });
};





const y = (data) => {
  const b = new Buffer.from(data, "utf-8").toString();
  fs.writeFile("employee.json", b, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("data entered successfully");
    }
  });
};

const z = (data) => console.log(data);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  console.log(req.method, "-->");

  if (req.method === "GET") {
    res.end("get method");
    req.on("data", x);
    return;
  }
  if (req.method === "POST") {
    res.end("post method ");
    req.on("data", y);
    return;
  }
  if (req.method === "PUT") {
    res.end("put method ");
    req.on("data", z);
    return;
  }
  if (req.method === "DELETE") {
    res.end("delete method ");
    return;
  }

  res.end("hello world");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
