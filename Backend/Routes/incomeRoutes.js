const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware')
const { addIncome, getAllIncome, DeleteIncome, DownloadIncome } = require('../controllers/IncomeController')

router.post('/add', protect, addIncome);

router.get('/get', protect, getAllIncome);

router.post('/download-income', protect, DownloadIncome);

router.delete('/delete/:id', protect, DeleteIncome);

module.exports = router;