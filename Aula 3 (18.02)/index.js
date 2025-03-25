const express = require('express');
const userService = require('./userService');

const app = express();
app.use(express.json());


// rota para criar usuario

app.post("/users", async (req,res,) =>{
    const {nome, email, senha, endereço, telefone, cpf} = req.body;
    if(!nome || !email || !senha || !endereço || !telefone || !cpf){
        return res.status(400).json({error: "Todos os campos são obrigatorios"})
    }
    const user = await userService.addUser(nome, email, senha, endereço, telefone, cpf);
    
    res.status(200).json({user});

})
 
//rota para listar todos os usuarios

app.get("/users", (req, res) => {
    res.json(userService.getUsers());
})

//Rota para excluir usuário pelo ID

app.delete("/users/:id", (req,res) => {
    const id = parseInt (req.params.id); //Converte o ID para número
    try {
        const resultado = userService.deleteUser(id); //Tenta excluir o usuário
        res.status(200).json(resultado); //Retorna a mensagem de sucesso
    } catch (erro) {
        res.status (404).json ({error: erro.message}) //Retorna a mensagem de erro
    }
})

const port = 3000;
app.listen(port, ()=> {
    console.log("servidor rodando na porta: ", port);
})

app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, email, senha, endereco, telefone, cpf } = req.body;
    try{
        const resultado = userService.alterUser(id, nome, email, senha, endereco, telefone, cpf);
        res.status(200).json(resultado);
    }catch(erro){
        res.status(400).json({error: erro.message});
    }
})