// server.js
const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Points to your db.json
const middlewares = jsonServer.defaults();

// Enable CORS for all origins
server.use(cors());

// Use default middlewares (logger, static, etc.)
server.use(middlewares);

// Parse JSON request bodies
server.use(jsonServer.bodyParser);

// Optional: Log POST requests
server.post('/contacts', (req, res, next) => {
  console.log('New contact submitted:', req.body);
  next();
});

// Use JSON Server router
server.use(router);

// Start server on port 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
