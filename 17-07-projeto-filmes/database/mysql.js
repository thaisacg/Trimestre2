import { Sequelize } from "sequelize";

const mysql = new Sequelize({
    dialect: 'mysql', 
    host: 'localhost',
    port: '3306',
    database: 'db_filmes',
    username: 'root',
    password: 'root'
});

export default mysql;