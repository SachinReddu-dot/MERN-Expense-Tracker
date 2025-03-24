const incomeModel = require("../Models/incomeModel");

exports.addIncome = async(req, res)=>{
    const userId = req.user.id;

    try {
        
        let { icon, amount, source, date } = req.body;

        if(!source || !amount || !date) return res.status(400).json({msg: 'all fields are required'})

        const newIncome = await incomeModel.create({
            userId,
            source,
            amount, 
            date: new Date(date),
            icon,
        })

        res.status(200).json(newIncome);

    } catch (error) {
        res.status(400).json({msg: 'something went wrong while creating a new icome', error: error.message})
    }
}

exports.getAllIncome = async(req, res)=>{
    const userId = req.user.id
}

exports.DeleteIncome = async(req, res)=>{}

exports.DownloadIncome = async(req, res)=>{}
