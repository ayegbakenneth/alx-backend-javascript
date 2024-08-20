const express = require('express');

const app = express()

app.get('/', (req, res) => {
	res.send('Hello Holberton School!')
});
app.listen(1245, () => {
	console.log('The express server is listening on 1245')
});

module.exports = app;
