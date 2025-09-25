const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Real Estate Management System! We are glad to have you here.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});