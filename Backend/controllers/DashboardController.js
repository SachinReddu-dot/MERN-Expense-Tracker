const incomeModel = require('../Models/incomeModel')
const expenseModel = require('../Models/expenseModel')
const { isValidObjectId, Types } = require('mongoose')

exports.dashboard = async (req, res)=>{
    try {
        const userId = req.user.id
        const userObjectId = new Types.ObjectId(String(userId));

        //fetch total income and expense
        const totalIncome = await incomeModel.aggregate([
            {$match: {userId: userObjectId }},
            {$group: {_id: null, total: {$sum: "$amount"} }},
        ]);

        const totalExpense = await expenseModel.aggregate([
            {$match: {userId: userObjectId }},
            {$group: {_id: null, total: {$sum: "$amount"} }},
        ]);

        //total 60 days income
        const last60DaysTransaction = await incomeModel.find({userId,
            date: {$gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000)}
        }).sort({date: -1})

        const last60DaysIncome= last60DaysTransaction.reduce((sum, transaction)=> sum + transaction.amount, 0)
        

        const last30DaysExpenseTransaction = await incomeModel.find({userId,
            date: {$gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)}
        }).sort({date: -1})

        const last30DaysExpense= last30DaysExpenseTransaction.reduce((sum, transaction)=> sum + transaction.amount, 0)
        

        const lastTransaction=[
            ...(await incomeModel.find({userId}).sort({date: -1}).limit(5)).map((trans)=>({
                ...trans.toObject(),
                type: 'income',
            })),

            ...(await expenseModel.find({userId}).sort({date: -1}).limit(5)).map((trans)=>({
                ...trans.toObject(),
                type: 'expense',
            }))
        ].sort((a,b)=>b.date-a.date)

        res.json({
            totalbalance: 
                (totalIncome[0]?.total || 0) - ((totalExpense[0]?.total || 0)),
            totalIncome: totalIncome[0]?.total || 0,
            totalExpense: totalExpense[0]?.total || 0,
            last30DaysExpenses:{
                total: last30DaysExpense,
                transaction: last30DaysExpenseTransaction,
            },
            last60DaysIncome:{
                total:last60DaysIncome,
                transaction: last60DaysTransaction
            },
            recentTransaction: lastTransaction
        })

    } catch (error) {
        res.status(400).json({msg: "something went wrong while getting dashboard data", error: error.message})
    }
}