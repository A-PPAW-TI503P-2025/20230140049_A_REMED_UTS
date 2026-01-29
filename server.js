require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/database');
const router = require('./routes/index');

// Import model agar tabel otomatis dibuat saat start
require('./models/Book');
require('./models/BorrowLog');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', router); // [cite: 60]

db.sync() // Hapus {force: true} agar data tidak hilang saat restart
    .then(() => {
        console.log('✅ Database Konek & Tabel Dibuat');
        app.listen(PORT, () => console.log(`🚀 Server jalan di port ${PORT}`));
    })
    .catch(err => console.log("❌ Error Database:", err));