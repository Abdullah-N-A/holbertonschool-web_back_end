# Node JS Basics

## Description

This project covers the fundamentals of Node.js and Express.js, including running JavaScript with Node, reading files, handling HTTP servers, and organizing a backend application with Express.

## Learning Objectives

- Run JavaScript using NodeJS
- Use NodeJS modules
- Read files using the Node JS `fs` module
- Access command line arguments and environment via `process`
- Create HTTP servers using Node's built-in `http` module
- Create HTTP servers using Express JS
- Create advanced routes with Express JS
- Use ES6 with Node JS via Babel-node
- Use Nodemon for faster development

## Requirements

- Ubuntu 20.04 LTS
- Node.js v20.x.x
- npm 9.x.x

## Setup

```bash
npm install
```

## Tasks

### 0. Executing basic javascript with Node JS
**File:** `0-console.js`
A function `displayMessage` that prints a string to STDOUT.

### 1. Using Process stdin
**File:** `1-stdin.js`
Reads the user's name from stdin and prints a greeting message.

### 2. Reading a file synchronously with Node JS
**File:** `2-read_file.js`
`countStudents(path)` reads a CSV database synchronously and logs student counts by field.

### 3. Reading a file asynchronously with Node JS
**File:** `3-read_file_async.js`
Same as task 2 but uses async file reading and returns a Promise.

### 4. Create a small HTTP server using Node's HTTP module
**File:** `4-http.js`
HTTP server on port 1245 that returns `Hello Holberton School!` for any request.

### 5. Create a more complex HTTP server using Node's HTTP module
**File:** `5-http.js`
HTTP server on port 1245 with two routes:
- `/` — returns `Hello Holberton School!`
- `/students` — returns the list of students from the CSV database

### 6. Create a small HTTP server using Express
**File:** `6-http_express.js`
Express server on port 1245 with a root route returning `Hello Holberton School!`.

### 7. Create a more complex HTTP server using Express
**File:** `7-http_express.js`
Express server on port 1245 with `/` and `/students` routes backed by the CSV database.

### 8. Organize a complex HTTP server using Express
**Directory:** `full_server/`
A fully organized Express application:
- `utils.js` — `readDatabase` helper (async)
- `controllers/AppController.js` — handles the homepage
- `controllers/StudentsController.js` — handles `/students` and `/students/:major`
- `routes/index.js` — defines all routes
- `server.js` — entry point, listens on port 1245

## Author

Johann Kerbrat, Engineering Manager at Uber Works
