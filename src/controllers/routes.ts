import { Router, Request, Response } from 'express';
import { CreateUserController } from './CreateUserController';

const router = Router();
const createUserController = new CreateUserController();

// aplicação rodando
router.get('/', (request:Request, response: Response) => {
    
    return response.json({mensagem: 'Api rodando'})
})
//cria usuário
router.post('/usuarios/', createUserController.handle)

export { router }