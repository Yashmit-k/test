const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Allow frontend to call backend
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from EC2 backend!', status: 'ok' });
});

app.get('/api/data', (req, res) => {
  res.json({
    items: ['Item A', 'Item B', 'Item C'],
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});