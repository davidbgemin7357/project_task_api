import { Sequelize } from "sequelize";

// !* To create the database Mysql:
// import mysql from "mysql2";
// Open the connection to MySQL server
// const connection = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: "",
// });

// Run create database statement
// connection.query(
//     `CREATE DATABASE IF NOT EXISTS project_task_db`,
//     function (err, results) {
//         console.log(results);
//         if (err) {
//             console.log(err)
//         }
//     }
// );

// Close the connection
// connection.end();

// !* connection to mysql database:
// export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     dialect: process.env.DB_DIALECT,
//     host: process.env.DB_HOST,
//     port: 3306,
//     dialectOptions: {
//         /* sirve para que al momento de mostrar las fechas, automáticamente las convierta en strings y no tener que hacer una conversión manual */
//         dateStrings: true,
//     },
//     // para evitar que aparezcan los querys sql en la consola
//     logging: false,
// });

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
});