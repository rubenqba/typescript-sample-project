import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config({ override: true, path: `.env.${process.env.NODE_ENV ?? ''}` });

const port = process.env.PORT ?? 3000;
const app = express();

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
