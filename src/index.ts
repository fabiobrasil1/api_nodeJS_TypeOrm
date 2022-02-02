import express from 'express';
import { router } from './controllers/routes'


const server = express();

server.use(router)


server.listen(3002, () => {
    console.log('servidor rodando na porta 3002 http://localhost:3002/')
})


