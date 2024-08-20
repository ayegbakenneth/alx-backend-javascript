const express = require('express');
const PORT = 1245;
const app = express();

app.get('/', (req, res) => {
	res.send('Hello Holberton School!');
});
app.listen(PORT, () => {
	console.log(
		`The express server is listening on PORT ${PORT}`);
});

module.exports = app;
