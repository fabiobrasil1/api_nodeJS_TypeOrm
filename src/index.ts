import 'reflect-metadata';
import express from 'express';
import { router } from './controllers/routes'
import createConnection from './database/database';

createConnection().catch(error=> console.log(error) );

const server = express();

server.use(express.json());
server.use(router);

server.listen(3002, () => {
    console.log('servidor rodando na porta 3002 http://localhost:3002/')
})


