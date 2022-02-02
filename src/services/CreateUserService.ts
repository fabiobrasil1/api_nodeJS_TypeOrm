
interface IUsuario{
    nome: string,
    idade: string,
    email: string,
    profissao: string
}

class CreateUserService{
    execute({ nome, idade,email,profissao }: IUsuario){
        const data = [];
        data.push({nome, idade,email, profissao})

        return data;
    }
}

export { CreateUserService }