// import modul
const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// inisialisasi aplikasi
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// url koneksi ke database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'plantae_services'
});

connection.connect(error => {
    if (error) {
        console.error('Error connecting to database', error);
    } else {
        console.log('Connected to database');
    }
});

// Menambahkan middleware CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Mengizinkan permintaan dari asal apa pun
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// POST /available_product
app.post('/available-product', (req, res) => {
    const { id, name } = req.body;

    const query = 'INSERT INTO available_product (id, name) VALUES (?, ?)';
    connection.query(query, [id, name], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('Product added to database!');
            res.status(200).json({ message: 'Product added to database' });
        }
    });
});

// GET /available_product
app.get('/available-product', (req, res) => {
    const query = "SELECT * FROM available_product";

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
        } else {
            res.status(200).json(results);
        }
    });
});

// POST /product
app.post('/product', (req, res) => {
    const {
        nama_produk,
        harga,
        kondisi,
        kemasan,
        kingdom,
        spesies,
        family,
        genus,
        berat_satuan,
        img_url
    } = req.body;

    const query = 'INSERT INTO product (nama_produk, harga, kondisi, kemasan, kingdom, spesies, family, genus, berat_satuan, img_url) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [nama_produk, harga, kondisi, kemasan, kingdom, spesies, family, genus, berat_satuan, img_url], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('Product added to database!');
            res.status(200).json({ message: 'Product added to database' });
        }
    });
});

// GET /product
app.get('/product', (req, res) => {
    const query = "SELECT * FROM product";

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
        } else {
            res.status(200).json(results);
        }
    })
})

// POST /signup 
app.post('/registration', (req, res) => {
    const { username, password } = req.body;

    const query = 'INSERT INTO registration (username, password) VALUES(?, ?)';
    connection.query(query, [username, password], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('Product added to database!');
            res.status(200).json({ message: 'Account added to database' });
        }
    })
})

// GET /sign_in
app.get('/registration', (req, res) => {
    const query = "SELECT * FROM registration";

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(200).json(results);
        }
    });
});

// POST /image_product 
app.post('/images', (req, res) => {
    // const { file } = req;
    const { url } = req.body;

    const query = 'INSERT INTO images (url) VALUES(?)';
    connection.query(query, [url], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('Product added to database!');
            res.status(200).json({ message: 'Image added to database' });
        }
    })
})

// GET /image_product
app.get('/images', (req, res) => {
    const query = "SELECT * FROM image_product";

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(200).json(results);
        }
    });
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});