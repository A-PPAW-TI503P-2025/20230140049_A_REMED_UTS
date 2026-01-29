const Book = require('../models/Book');
const BorrowLog = require('../models/BorrowLog');

// PUBLIC
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (err) { res.status(500).json({msg: err.message}); }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        book ? res.json(book) : res.status(404).json({msg: "Buku tidak ditemukan"});
    } catch (err) { res.status(500).json({msg: err.message}); }
};

// ADMIN
exports.createBook = async (req, res) => {
    try {
        await Book.create(req.body);
        res.status(201).json({msg: "Buku ditambahkan"});
    } catch (err) { res.status(400).json({msg: err.message}); }
};

exports.updateBook = async (req, res) => {
    try {
        await Book.update(req.body, { where: { id: req.params.id } });
        res.json({msg: "Buku diupdate"});
    } catch (err) { res.status(400).json({msg: err.message}); }
};

exports.deleteBook = async (req, res) => {
    try {
        await Book.destroy({ where: { id: req.params.id } });
        res.json({msg: "Buku dihapus"});
    } catch (err) { res.status(500).json({msg: err.message}); }
};

// USER (LOGIC UTAMA SOAL)
exports.borrowBook = async (req, res) => {
    const { bookId, latitude, longitude } = req.body;
    try {
        const book = await Book.findByPk(bookId);
        if (!book) return res.status(404).json({msg: "Buku hilang"});
        if (book.stock <= 0) return res.status(400).json({msg: "Stok habis"});

        // Kurangi Stok [cite: 75]
        book.stock -= 1;
        await book.save();

        // Catat Log Lokasi [cite: 77]
        await BorrowLog.create({
            userId: req.userId,
            bookId: bookId,
            latitude: latitude,
            longitude: longitude
        });

        res.json({msg: "Peminjaman berhasil, lokasi tercatat."});
    } catch (err) { res.status(500).json({msg: err.message}); }
};