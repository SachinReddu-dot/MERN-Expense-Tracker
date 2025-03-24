const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('../Models/userModel')

const jwtToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'})
}

exports.userRegister = async(req, res)=>{

    let { fullname, email, password }= req.body;
    
    if(!fullname || !email || !password){
        return res.status(400).json({msg: "All field sare required"})
    }

    try {

        const existingUser = await userModel.findOne({email});
        if(existingUser) return res.status(400).json({msg: "email already exists"})

        const hash = await bcrypt.hash(password, 10)

        const newUser = await userModel.create({
            fullname,
            email,
            password: hash,
        })

        res.status(200).json({
            id: newUser._id ,
            newUser, 
            token: jwtToken(newUser._id)
        })

    } catch (error) {
        res.status(500).json({ msg: "something went wrong while regesetring the user", error: error.message})
    }
}

exports.userLogin = async(req, res)=>{
    let { email, password } = req.body;

    const existingUser = await userModel.findOne({email});
    if(!existingUser) return res.satus(400).json({msg: 'You dont have an account please register'})

    try {
        
        bcrypt.compare(password, existingUser.password, (err, result)=>{
            if(result){
                const token = jwtToken(existingUser._id)
                res.cookie('token', token)
                // res.redirect('/home')
                res.status(200).json({msg: "loggedIN", token})
            }
            else {
                return res.satus(400).json({msg: 'something went wrong while resgetering user'})
            }
        });
        
    } catch (error) {
        res.status(500).json({ msg: "something went wrong while logging the user", error: error.message})
    }

}

exports.userInfo = async(req, res)=>{
    try {
        const userInfo = await userModel.findById(req.user.id).select("-password")
        res.status(200).json(userInfo)
    } catch (error) {
        res.status(500).json({ msg: "something went wrong while getting user", error: error.message})
    }
}