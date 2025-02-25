const User = require("./user");
const path = require('path'); //Modulo para manipular caminhos
const fs = require('fs'); //Modulo para manipular arquivos (file system)

class userService {
    constructor() {
        this.filePath = path.join(__dirname, 'user.json');
        this.users = this.loadUsers(); // Array para armazenar user 
        this.nextId = this.getNextId(); // Contador para gerar id
    }

    loadUsers() {
        try {
            if (fs.existsSync(this.filePath)) { //verifica se o arquivo existe
                const data = fs.readFileSync(this.filePath); //le o arquivo
                return JSON.parse(data); //transforma o json em objeto
            }
        } catch (erro) {
            console.log('Erro ao carregar arquivo', erro);
        }
        return []; //retorna um array vazio
    }

    //definir o prox id a ser utilizado
    getNextId() {
        try {
            if (this.users.length === 0) return 1;
            return Math.max(...this.users.map(user => user.id)) + 1;
        } catch (erro) {
            console.log('Erro ao buscar proximo id', erro);
        }
    }

    saveUsers() {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(this.users));
        } catch (erro) {
            console.log('Erro ao salvar arquivo', erro);
        }
    }


    addUser(nome, email, senha, endereço, telefone, cpf) {
        try {
            const user = new User(this.nextId++, nome, email, );
            this.users.push(user);
            this.saveUsers();
            return user;
        } catch (erro) {
            console.log('Erro ao adicionar usuário', erro);
        }
    }

    getUsers() {
        try {
            return this.users
        } catch (erro) {
            console.log('Erro ao buscar usuário', erro);
        }
    }

}





module.exports = new userService;