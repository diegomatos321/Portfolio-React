// MODULES
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const helmet = require('helmet');
// APP
const app = express();

// MIDDLEWARES
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);


// Redirecionamento HTTPS da Umbler
app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele 
    if (req.headers["x-forwarded-proto"] == "http") //Checa se o protocolo informado nos headers é HTTP 
        res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS 
    else //Se a requisição já é HTTPS 
        next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado 
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA BASE
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('error', error => console.log("Ocorreu um erro ao conectar na base de dados: ", error));
mongoose.connection.once('open', () => console.log("Conectado na base de dados"));

// ROUTES
const trabalhosRouter = require("./routes/trabalhosRouter");
const contatoRouter = require("./routes/contatoRouter");

// Arquivos
app.use(express.static(path.join(__dirname, "build")));

// ROTAS
app.use("/trabalhos", trabalhosRouter);
app.use("/contato", contatoRouter);

/* app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
}); */

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor Ligado !")
});