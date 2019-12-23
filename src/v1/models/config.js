require('dotenv').config();
const mysql = require('mysql2/promise');
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB,
};
let conn = '';
const dbInit = async () => {
  try {
    if(conn == ''){
      const db = await mysql.createConnection(dbConfig);
      db.connect(err => {
        console.log('Success:', 'Database connected.');
      });
      conn = db;
      console.log('Success:','Connecting through new database connection.');
      return conn;
    }else{
      console.log('Success:','Using existing database connection.');
      return conn;
    }
  } catch (e) {
    return e;
  }
};

const _sendResponseSuccess = async response => {
  return {
    status: true,
    code: 200,
    message: 'success',
    data: response,
  };
};

const _sendResponseError = async error => {
  return {
    status: false,
    code: 401,
    message: error,
    data: null,
  };
};
module.exports = {
  dbInit,
  _sendResponseError,
  _sendResponseSuccess
};
