import { DataTypes } from "sequelize";
import mysql from "./mysql.js";

const Filme = mysql.define('Filme', {
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    ano: DataTypes.SMALLINT
});

const Ator = mysql.define('Ator', {
    nome: DataTypes.STRING,
    pais: DataTypes.STRING
});

const Diretor = mysql.define('Diretor', {
    nome: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY
});
// relações
Filme.belongsTo(Diretor);
Diretor.hasMany(Filme);

Filme.belongsToMany(Ator, { through: 'Filme_Ator' });
Ator.belongsToMany(Filme, { through: 'Filme_Ator' });

 //mysql.sync({ force: true });
mysql.sync();

export { Filme, Ator, Diretor };