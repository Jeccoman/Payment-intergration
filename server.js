import express from 'express';

const app = express();

// Add CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Handle POST request
app.post('/users/register', (req, res) => {
  // Handle registration logic
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});