const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware')
const { addExpense, getAllExpense, DeleteExpense, DownloadExpense } = require('../controllers/ExpenseController')

router.post('/add', protect, addExpense);

router.get('/get', protect, getAllExpense);

router.post('/download-expense', protect, DownloadExpense);

router.delete('/delete/:id', protect, DeleteExpense);

module.exports = router;