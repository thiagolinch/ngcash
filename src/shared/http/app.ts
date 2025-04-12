import 'reflect-metadata';
import express from "express";

import { routes } from './routes';

import '../typeorm';
import '../container'
import { setupSwagger } from '../../../swagger';

const app = express();

app.use(express.json());

app.use(routes)

setupSwagger(app);

export { app }