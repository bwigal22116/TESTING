const express = require('express');
const path = require('path'); // Helps work with file paths
const app = express();

const route = [
  { path: '/', file: 'index.html' },
  // ... your other routes
];

// Assuming your HTML files are in a 'public' directory:
app.use(express.static(path.join(__dirname, 'static')));

// Route configuration
routes.forEach(route => {
  app.get(route.path, (req, res) => {
    res.sendFile(path.join(__dirname, 'static', route.file));
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
