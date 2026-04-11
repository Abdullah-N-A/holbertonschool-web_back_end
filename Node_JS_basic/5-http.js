const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbPath = process.argv[2];
    let output = 'This is the list of our students\n';

    countStudents(dbPath)
      .then(() => {
        const lines = require('fs').readFileSync(dbPath, 'utf8')
          .split('\n').filter((line) => line.trim() !== '').slice(1);

        output += `Number of students: ${lines.length}\n`;

        const fields = {};
        lines.forEach((line) => {
          const parts = line.split(',');
          const firstName = parts[0];
          const field = parts[3];
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstName);
        });

        Object.keys(fields).forEach((field) => {
          output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });

        res.end(output);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
