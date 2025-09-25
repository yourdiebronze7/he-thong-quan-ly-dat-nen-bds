const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Hệ Thống Quản Lý Đất Nền Bất Động Sản!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
