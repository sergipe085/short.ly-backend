import express from 'express'
import "express-async-errors"

import cors from "cors";

import "./database/index";

import { routes } from './routes/routes';

import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorMiddleware);

app.listen(3333, () => {
  console.log("🚀Server started on port 3333!")
});