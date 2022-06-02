import express from 'express';
import cors from 'cors';

import sellerRouter from './routes/seller.routes.js';
import immobileRouter from './routes/immobile.routes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/seller', sellerRouter);
app.use('/immobile', immobileRouter);

app.listen(3000, () => console.log('API has started!'));
