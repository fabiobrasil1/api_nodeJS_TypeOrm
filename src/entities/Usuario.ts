import { Entity, Column, PrimaryColumn  } from 'typeorm';


@Entity('usuario')
class Usuario{
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;
    
    @Column()
    idade: string;
    @Column()
    email: string;
    @Column()
    profissao: string;
    
    
}

export { Usuario } 