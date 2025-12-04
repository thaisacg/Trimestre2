import express from "express";

import {
    Filme,
    Ator,
    Diretor
} from "./database/tables.js";

const app = express();

app.use('/atores', async (req, res) => {
    const Atores = await Ator.findAll();
    res.json(Atores);
});

app.use('/diretores', async (req, res) => {
    const Diretores = await Diretor.findAll();
    res.json(Diretores);
});

app.use('/filmes', async (req, res) => {
    const Filmes = await Filme.findAll();
    res.json(Filmes);
});

// app.use('/', function(){})
app.use('/', async (req, res) => {
    const at1 = await Ator.create({
        nome: 'luiz',
        pais: 'Brasil'
    });

    const at2 = await Ator.create({
        nome: 'outro Ator',
        pais: 'China'
    });

    const dir1 = await Diretor.create({
        nome: 'Mika',
        nascimento: '02/03/1998'
    });
    const fil1 = await Filme.create({
        titulo: 'Onça Pintada',
        descricao: 'Animal',
        ano: 2023,
        DiretorId: dir1.Id
    });

    await fil1.setAtors([at1, at2]);

    res.end('Rodou no server!');
});

app.listen(80, () => {
    console.log('Em escuta...');
});