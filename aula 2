// classe base usuario
class Usuario {
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this._senha = senha;//atríbuto privado
    }

     autenticar(senha){
        return senha === this._senha;
     }

     alterarSenha(novaSenha){
        this._senha = novaSenha;
        console.log('Senha alterada com sucesso');
     }
} 

//classe admim que herda do usuario
class Admim extends Usuario {
    constructor(nome, email, senha, nivelAcesso){
        super(nome, email, senha); //chama o constructor da classe pai
        this.nivelAcesso = nivelAcesso;
    }
    banirUsuario(usuario){
        console.log(`${usuario.nome} foi banido pelo admim ${this.nome}`)
       }

       //Polimorfismo sobrescrevendo o método autenticar
       autenticar(senha){
        return senha === this._senha && this.nivelAcesso === 'alto';
       }
}


    
//exemplo de uso

const usuario1 = new Usuario('Julia', 'Miranda@gmail.com', '3536');
const usuario2 = new Admim('Jéssica', 'Lohanny@gmail.com', '1111', 'alto');
console.log(usuario1.autenticar('3536')); 
console.log(usuario2.autenticar('1111')); 
usuario2.banirUsuario(usuario1);
