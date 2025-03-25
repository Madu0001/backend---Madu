class User{
    constructor(id, nome, email, senha, endereço, telefone, cpf){
        this.id = id; // id do user
        this.nome = nome; // nome do user
        this.email = email; //email do usuário
        this.senha = senha; //senha do usuário
        this.endereço = endereço; //endereço do usuário
        this.telefone = telefone;
        this.cpf = cpf;
    }
}


module.exports = User; // exportar o modulo