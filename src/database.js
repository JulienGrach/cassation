const { MongoClient } = require("mongodb");

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env

const client = new MongoClient(DB_HOST, { auth: { username: DB_USER, password: DB_PASSWORD }, monitorCommands: true });

module.exports = client.db(DB_NAME)
