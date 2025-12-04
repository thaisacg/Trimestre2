import { funcao1 } from "./funcao1";
import funcao2 from "./funcao2";
import funcao3 from "./funcao3";
import funcao4 from "./funcao4";
import express from "express";

funcao1();
funcao2();
funcao3();
console.log(funcao4(2, 4));

const app = express();

app.use('/', (req, res) => {
    res.end('Hello Node via navegador.');
});

app.listen(80, () => {
    console.log('Executando...');
});