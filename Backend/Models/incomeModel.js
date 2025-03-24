const mongoose = require('mongoose');

const incomeSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    source: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    icon: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true})

module.exports = mongoose.model("income", incomeSchema);