const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Root route returning success message
app.get('/', (req, res) => {
  res.send('Node.js app successfully running on Hostinger');
});

// Health check API route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    server: 'hostinger-node',
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is successfully running on port ${PORT}`);
});
