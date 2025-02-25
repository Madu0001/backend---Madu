const express = require('express');
const userService = require('./userService');

const app = express();
app.use(express.json());


// rota para criar usuario

app.post("/users", (req,res,) =>{
    const {nome, email, senha, endereço, telefone, cpf} = req.body;
    if(!nome || !email || !senha || !endereço || !telefone || !cpf){
        return res.status(400).json({error: "Todos os campos são obrigatorios"})
    }
    const user = userService.addUser(nome, email, senha, endereço, telefone, cpf);
    res.status(200).json({user});

})
 
//rota para listar todos os usuarios

app.get("/users", (req, res) => {
    res.json(userService.getUsers());
})

const port = 3000;
app.listen(port, ()=> {
    console.log("servidor rodando na porta: ", port);
})