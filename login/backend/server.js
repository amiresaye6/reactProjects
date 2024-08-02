const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'testuser',
    password: 'Amir@mysql1',
    database: 'alx_graduation_test'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/login', (req, res) => {
    const sql = `SELECT * FROM users`;
    db.query(sql, (err, data) => {
        if (err) return res.json('Login failed');
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
    const values = [
        req.body.username, // changed to req.body.username
        req.body.password
    ];

    db.query(sql, values, (err, data) => {
        if (err) return res.json('Login failed');
        if (data.length === 0) return res.json('Invalid credentials');
        return res.json(data);
    });
});

app.listen(1234, () => {
    console.log("listening on port 1234...");
});
