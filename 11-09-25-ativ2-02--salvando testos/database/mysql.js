import { Sequelize } from "sequelize";

const mysql = new Sequelize({
    dialect: 'mysql', 
    host: 'localhost',
    port: '3306',
    database: 'gardenia',
    username: 'root',
    password: 'root'
});

export default mysql;