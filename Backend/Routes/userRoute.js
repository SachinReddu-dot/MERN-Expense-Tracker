const express = require('express');
const router = express.Router();
const { userRegister, userLogin, userInfo } = require('../controllers/AuthController')
const protect  = require('../middlewares/authMiddleware')

router.post("/register", userRegister)

router.post("/login", userLogin)

router.get("/user-info", protect, userInfo)


module.exports = router