import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.status(200).send('in root route');
})

app.listen(PORT, () => {
  console.log(`Listing on port ${PORT}...`);
})