const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { dashboard } = require('../controllers/DashboardController');

router.get('/get', protect, dashboard);

module.exports = router;