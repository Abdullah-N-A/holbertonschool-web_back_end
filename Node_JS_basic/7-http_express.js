const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbPath = process.argv[2];
  const fs = require('fs');

  let output = 'This is the list of our students\n';

  countStudents(dbPath)
    .then(() => {
      const lines = fs.readFileSync(dbPath, 'utf8')
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

      res.send(output);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

app.listen(1245);

module.exports = app;
