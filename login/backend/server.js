const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection(
    host='localhost',
    user='testuser',
    password='Amir@mysql1',
    database='alx_graduation_test'
)

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/login', (req, res) => {
    const sql = `SELECT * FROM users WHERE username = ${req.body.email} AND password = ${erq.body.password}`
    // const values = [
    //     req.body.email,
    //     req.body.password
    // ]

    db.query(sql,(err, data) => {
        if (err) return res.json('Login failed');
        return res.json(data);
    })
})

app.listen(1234, () => {
    console.log("listnning...");
})
