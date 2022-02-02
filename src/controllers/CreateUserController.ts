import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService'

class CreateUserController {
    handle(request: Request, response: Response) {
        
        const data = request.body;
        
        const createUserService = new CreateUserService()

        const nome = data.nome;
        const idade = data.idade;
        const email = data.email;
        const profissao = data.profissao
      
        if( nome.length === 0 || idade.length === 0 || email.length === 0 || profissao.length === 0){
            return response.status(400).json({mensagem: 'preencha todos os campos'});
        }
       
        const user = createUserService.execute({nome,idade,email,profissao})

        return response.status(201).json({user}) 
    }
}

export { CreateUserController }