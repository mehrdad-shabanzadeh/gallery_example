const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {
	// console.log(req.url);
	if (req.url === "/" && req.method === "GET") {
		fs.readFile("./public/home.html", "utf8", function (err, home) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(home);
				res.end();
			}
		});
	} else if (req.url === "/favicon.ico" && req.method === "GET") {
		res.writeHead(404, "Not Found!");
		res.end();
	} else if (req.url === "/contactUs" && req.method === "GET") {
		fs.readFile("./public/contactUs.html", "utf8", function (err, contactUs) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(contactUs);
				res.end();
			}
		});
	} else if (req.url === "/aboutUs" && req.method === "GET") {
		fs.readFile("./public/aboutUs.html", "utf8", function (err, aboutUs) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(aboutUs);
				res.end();
			}
		});
	} else if (req.url === "/style.css" && req.method === "GET") {
		fs.readFile("./public/css/style.css", function (err, css) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "text/css" });
				res.write(css);
				res.end();
			}
		});
	} else if (req.url === "/1.jpg" && req.method === "GET") {
		fs.readFile("./public/images/1.jpg", function (err, image1) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "image/jpg" });
				res.write(image1);
				res.end();
			}
		});
	} else if (req.url === "/2.jpg" && req.method === "GET") {
		fs.readFile("./public/images/2.jpg", function (err, image2) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "image/jpg" });
				res.write(image2);
				res.end();
			}
		});
	} else if (req.url === "/3.jpg" && req.method === "GET") {
		fs.readFile("./public/images/3.jpg", function (err, image3) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "image/jpg" });
				res.write(image3);
				res.end();
			}
		});
	} else if (req.url === "/4.jpg" && req.method === "GET") {
		fs.readFile("./public/images/4.jpg", function (err, image4) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "image/jpg" });
				res.write(image4);
				res.end();
			}
		});
	} else if (req.url === "/5.jpg" && req.method === "GET") {
		fs.readFile("./public/images/5.jpg", function (err, image5) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "image/jpg" });
				res.write(image5);
				res.end();
			}
		});
	} else if (req.url === "/6.jpg" && req.method === "GET") {
		fs.readFile("./public/images/6.jpg", function (err, image6) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "image/jpg" });
				res.write(image6);
				res.end();
			}
		});
	} else if (req.url === "/1/fullSize" && req.method === "GET") {
		fs.readFile("./public/image1.html", "utf8", function (err, image1HTML) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(image1HTML);
				res.end();
			}
		});
	} else if (req.url === "/1" && req.method === "GET") {
		fs.readFile("./public/images/1.jpg", function (err, image1FullSize) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "image/jpg" });
				res.write(image1FullSize);
				res.end();
			}
		});
	} else if (req.url === "/2/fullSize" && req.method === "GET") {
		fs.readFile("./public/image2.html", "utf8", function (err, image2HTML) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(image2HTML);
				res.end();
			}
		});
	} else if (req.url === "/2" && req.method === "GET") {
		fs.readFile("./public/images/2.jpg", function (err, image2FullSize) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "image/jpg" });
				res.write(image2FullSize);
				res.end();
			}
		});
	} else if (req.url === "/3/fullSize" && req.method === "GET") {
		fs.readFile("./public/image3.html", "utf8", function (err, image3HTML) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(image3HTML);
				res.end();
			}
		});
	} else if (req.url === "/3" && req.method === "GET") {
		fs.readFile("./public/images/3.jpg", function (err, image3FullSize) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "image/jpg" });
				res.write(image3FullSize);
				res.end();
			}
		});
	} else if (req.url === "/4/fullSize" && req.method === "GET") {
		fs.readFile("./public/image4.html", "utf8", function (err, image4HTML) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(image4HTML);
				res.end();
			}
		});
	} else if (req.url === "/4" && req.method === "GET") {
		fs.readFile("./public/images/4.jpg", function (err, image4FullSize) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "image/jpg" });
				res.write(image4FullSize);
				res.end();
			}
		});
	} else if (req.url === "/5/fullSize" && req.method === "GET") {
		fs.readFile("./public/image5.html", "utf8", function (err, image5HTML) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(image5HTML);
				res.end();
			}
		});
	} else if (req.url === "/5" && req.method === "GET") {
		fs.readFile("./public/images/5.jpg", function (err, image5FullSize) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "image/jpg" });
				res.write(image5FullSize);
				res.end();
			}
		});
	} else if (req.url === "/6/fullSize" && req.method === "GET") {
		fs.readFile("./public/image6.html", "utf8", function (err, image6HTML) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(image6HTML);
				res.end();
			}
		});
	} else if (req.url === "/6" && req.method === "GET") {
		fs.readFile("./public/images/6.jpg", function (err, image6FullSize) {
			if (err) {
				return console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "image/jpg" });
				res.write(image6FullSize);
				res.end();
			}
		});
	}
}).listen(3000);
console.log("Server starts listening...");
