const express = require('express');
const router = express.Router();
const { verifyAdmin, verifyUser } = require('../middleware/auth');
const ctrl = require('../controllers/BookController');

// Public
router.get('/books', ctrl.getAllBooks);
router.get('/books/:id', ctrl.getBookById);

// Admin
router.post('/books', verifyAdmin, ctrl.createBook);
router.put('/books/:id', verifyAdmin, ctrl.updateBook);
router.delete('/books/:id', verifyAdmin, ctrl.deleteBook);

// User
router.post('/borrow', verifyUser, ctrl.borrowBook);

module.exports = router;