const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    icon: String
}, {timestamps: true})

module.exports = mongoose.model('expense', expenseSchema)