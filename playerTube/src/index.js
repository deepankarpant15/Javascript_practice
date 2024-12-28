// index.js
import express from 'express';  // ES module import if using ES modules
const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
