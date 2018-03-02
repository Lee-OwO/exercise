// const exec = require("child_process").exec;

function start(res) {
	console.log("Request handler 'start' was called")

	const body = `
		<html>
		<head>
			<meta http-equiv="Content-Type" content="text/html" charset=UTF-8/>
		</head>
		<body>
			<from action="/upload" method="post">
				<textarea name="text" cols="60" rows="20"></textarea>	
				<input type="submit" value="Submit" />
			</from>
		</body>
		</html>
	`;
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write(body);
	res.end();
}

function upload(res) {
	console.log("Request handler 'upload' was called")

	res.writeHead(200, { "Content-Type": "text/plain" });
	res.write("hello world");
	res.end();
}

exports.start = start;
exports.upload = upload;