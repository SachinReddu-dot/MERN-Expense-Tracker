const express = require('express');
const router = express.Router();
const { userRegister, userLogin, userInfo } = require('../controllers/AuthController')
const protect  = require('../middlewares/authMiddleware')
const upload  = require('../Config/multer')

router.post("/register", userRegister)

router.post("/login", userLogin)

router.get("/user-info", protect, userInfo)

router.post('/upload-profile', upload.single('image'), (req, res)=>{
    if(!req.file){
        return res.status(400).json({msg: "no file uploaded"})
    }
    const imageUrl = `${req.protocol}://${req.get('host')}/public/images/${req.file.filename}`
    res.status(200).json({imageUrl})
})


module.exports = router