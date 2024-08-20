const http = require('http');
const url = require('url');
const fs = require('fs');

const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const rows = data.trim().split('\n');
      const students = rows.slice(1).filter(rows => rows.trim() !== '');

      const columns = {};

      students.forEach(student => {
        const [firstname, , , column] = student.split(',');
        if (!columns[column]) {
          columns[column] = [];
        }
        columns[column].push(firstname);
      });

      let result = `Number of students: ${students.length}\n`;
      for (const [column, names] of Object.entries(columns)) {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
};

const app = http.createServer((req, res) => {
  const reqLocator = url.parse(req.url, true);

  if (reqLocator.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (reqLocator.pathname === '/students') {
    const databasePath = process.argv[2];
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    countStudents(databasePath)
      .then((studentData) => {
        res.end(`This is the list of our students\n${studentData}`);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
