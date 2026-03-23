const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Root route returning success message
app.get('/', (req, res) => {
  res.send('Node.js app successfully running ');
});

// Dummy data route
app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 1,
        name: 'akash kumar',
        email: 'akash.kumar@gmail.com',
        role: 'Admin',
        joinDate: '2025-01-15'
      },
      {
        id: 2,
        name: 'vishal rao',
        email: 'vishal.rao@gmail.com',
        role: 'User',
        joinDate: '2025-02-20'
      },
      {
        id: 3,
        name: 'rudra singh',
        email: 'rudra.singh@gmail.com',
        role: 'User',
        joinDate: '2025-03-10'
      }
    ],
    count: 3
  });
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
