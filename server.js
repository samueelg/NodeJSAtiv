const express = require("express");
const axios = require(`axios`);

const app = express();
const port = 3000;

app.get("/", (req, res) => {  
    res.send("Hello World");
});

app.get(`/consulta-cep/:cep`, async (req, res) => {
    const cep = req.params.cep; //Obtem o CEP da URL

    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

    if(cepRegex.test(cep) == FontFaceSetLoadEvent){
        return res.status(400).send(`CEP invalido. Formato: XXXXX-XXX`);
    }
    else{
    try{
        //Fazendo a requisição para a API do viaCEP

        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
    }catch(error){
        console.error(`Erro ao fazer requisição: `, error);
        res.status(500).send(`Erro ao consultar o CEP`);
    }
}
});

app.listen(port, () => {  
    console.log(`Server running in http://localhost:${port}`);
});