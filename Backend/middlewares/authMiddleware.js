const jwt = require('jsonwebtoken')
const userModel = require('../Models/userModel')

const auth = async(req, res, next)=>{
    if(!req.cookies.token){
        res.status(400).json({msg: "no token found"})
    }

    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY);
        req.user = await userModel.findById(decoded.id).select('-password')
        next()
    } catch (error) {
        res.status(400).json({msg: "went wrong while getting the user data", error: error.message})
    }
}

module.exports = auth;