import { DataTypes } from "sequelize";
import mysql from "./mysql.js";

const Cliente = mysql.define('cliente', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    telefone: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cep: DataTypes.STRING
});

const Produto = mysql.define('produto', {
    estoque: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    dimensoes: DataTypes.STRING,
});

const Pedido = mysql.define('pedido', {
    dataPedido: DataTypes.DATE,
    total: DataTypes.DECIMAL,
});

const MeioPagamento = mysql.define('meiopag', {
    dataPag: DataTypes.DATE,
    valor: DataTypes.DECIMAL,
    statusPag: DataTypes.STRING,
    descMeioPag: DataTypes.STRING
});

const Entrega = mysql.define('entrega', {
    statusEntrega: DataTypes.STRING,
    dataEntregaPrevista: DataTypes.DATE,
    dataEntregaReal: DataTypes.DATE,
    dataEnvio: DataTypes.DATE,
    codRastreamento: DataTypes.STRING
});

const Artista = mysql.define('artista', {
    
});

const Pedido_Produto = mysql.define('pedido_produto', {
    quantidade: DataTypes.INTEGER,
});

// relações

// (1:N)
Pedido.belongsTo(Cliente);  
Cliente.hasMany(Pedido);

// (1:N)
Pedido.belongsTo(MeioPagamento);  
MeioPagamento.hasMany(Pedido);

// (1:N)
Pedido.belongsTo(Entrega);  
Entrega.hasMany(Pedido);

//(N:N)
Pedido.belongsToMany(Produto, { through: Pedido_Produto });
Produto.belongsToMany(Pedido, { through: Pedido_Produto });

// mysql.sync({ force: true });
mysql.sync();

export { Cliente, Produto, Pedido, MeioPagamento, Entrega, Pedido_Produto };