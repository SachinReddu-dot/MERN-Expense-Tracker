const ExpenseModel = require("../Models/expenseModel");
const xlsx = require('xlsx');

exports.addExpense = async(req, res)=>{
    const userId = req.user.id;

    try {
        
        let { icon, amount, category, date } = req.body;

        if(!category || !amount || !date) return res.status(400).json({msg: 'all fields are required'})

        const newExpense = await ExpenseModel.create({
            userId,
            category,
            amount, 
            date: new Date(date),
            icon,
        })

        res.status(200).json(newExpense);

    } catch (error) {
        res.status(400).json({msg: 'something went wrong while creating a new expense', error: error.message})
    }
}

exports.getAllExpense = async(req, res)=>{
    const userId = req.user.id

    try {
        const allExpense = await ExpenseModel.find({userId: userId})
        res.status(200).json(allExpense)
    } catch (error) {
        res.status(400).json({message: 'something went wrong while getting all users',error: error.message})  
    } 

}

exports.DeleteExpense = async(req, res)=>{
    try {
        const deletedUser = await ExpenseModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedUser)

    } catch (error) {
        res.status(400).json({message: 'something went wrong while deleting all users',error: error.message})          
    }
}

exports.DownloadExpense = async(req, res)=>{
    const userId = req.user.id;

    try {
        const excelExpense = await ExpenseModel.find({userId}).sort({date: -1});

        const data = excelExpense.map((items)=>({
                Source: items.source,
                Amount: items.amount,
                Date: items.date
        }))

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Expense");
        xlsx.writeFile(wb, "Expense_details.xlsx");
        res.download('Expense_details.xlsx')

    } catch (error) {
        res.status(400).json({message: 'something went wrong while downloading',error: error.message})          
    }

}
