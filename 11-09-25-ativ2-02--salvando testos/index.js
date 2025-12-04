import express from "express";

import {
    Cliente,
    Produto,
    Pedido,
    MeioPagamento,
    Entrega,
    Pedido_Produto
} from "./database/tables.js";

const app = express();

app.use('/clientes', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
});

app.use('/produtos', async (req, res) => {
    const  produtos = await Produto.findAll();
    res.json(produtos);
});

app.use('/pedidos', async (req, res) => {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
});

app.use('/pagamentos', async (req, res) => {
    const pagamentos = await MeioPagamento.findAll();
    res.json(pagamentos);
});

app.use('/entregas', async (req, res) => {
    const entregas = await Entrega.findAll();
    res.json(entregas);
});

app.use('/pedido_produto', async (req, res) => {
    const pedido_produto = await Pedido_Produto.findAll();
    res.json(pedido_produto);
});

// app.use('/', function(){})

app.use('/', async (req, res) => {
    const cliente = await Cliente.create({
        nome: "Maria",
        email: "maria@email.com",
        senha: "123456",
        telefone: "11999999999",
        endereco: "Rua A, 100",
        cep: "12345678"
    });

    const produto = await Produto.create({
        estoque: 10,
        nome: "Poster Malice Mizer",
        preco: 199.99,
        dimensoes: "50x70",
    });

    const meio = await MeioPagamento.create({
        dataPag: '2025-07-29',
        valor: 199.99,
        statusPag: "Aprovado",
        descMeioPag: "Cartão"
    });

    const entrega = await Entrega.create({
        statusEntrega: "Enviado", 
        dataEntregaPrevista: '2025-07-29',
        dataEntregaReal: '2025-07-25',
        dataEnvio: '2025-07-29',
        codRastreamento: "ABC123"
    });

    const pedido = await Pedido.create({
        dataPedido: '2025-07-29',
        total: 199.99,
        clienteId: cliente.id,
        meiopagId: meio.id,
        entregaId: entrega.id
    });

    const pedido_produto = await Pedido_Produto.create({
        quantidade: 2,
        pedidoId: pedido.id,
        produtoId: produto.id
    });

  //  await pedido.setProdutos([produto]);

    res.end('Rodou no server!');
});

app.listen(80, () => {
    console.log('Em escuta...');
});