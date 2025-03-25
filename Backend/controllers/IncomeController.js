const incomeModel = require("../Models/incomeModel");
const xlsx = require('xlsx');

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

    try {
        const allIncome = await incomeModel.find({userId: userId})
        res.status(200).json(allIncome)
    } catch (error) {
        res.status(400).json({message: 'something went wrong while getting all users',error: error.message})  
    } 

}

exports.DeleteIncome = async(req, res)=>{
    try {
        const deletedUser = await incomeModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedUser)

    } catch (error) {
        res.status(400).json({message: 'something went wrong while deleting all users',error: error.message})          
    }
}

exports.DownloadIncome = async(req, res)=>{
    const userId = req.user.id;

    try {
        const excelIncome = await incomeModel.find({userId}).sort({date: -1});

        const data = excelIncome.map((items)=>({
                Source: items.source,
                Amount: items.amount,
                Date: items.date
        }))

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Income");
        xlsx.writeFile(wb, "income_details.xlsx");
        res.download('income_details.xlsx')

    } catch (error) {
        res.status(400).json({message: 'something went wrong while downloading',error: error.message})          
    }

}
