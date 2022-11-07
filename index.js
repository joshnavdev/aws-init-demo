import express from 'express';
import os from 'os';

const app = express();

app.get('/', (_, res) => {
  res.json({ host: os.hostname() });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
