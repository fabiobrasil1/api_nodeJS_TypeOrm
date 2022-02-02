import { Request, Response } from 'express';

class CreateUserController {
    handle(request: Request, response: Response) {
        
         const data = request.body;

        const nome = data.nome;
        const idade = data.idade;
        const profissao = data.profissao

        return response.json({
            "nome": nome,
            "idade": idade,
            "profissao": profissao,
        }) 
    }
}

export { CreateUserController }