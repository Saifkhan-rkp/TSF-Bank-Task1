const mongoose = require("mongoose");
const Transaction = require("./transaction");

const customrSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    Balance: Number,
    transactions:[{
        type: mongoose.Schema.Types.ObjectId, ref:"Transaction"}],
    avatar:String,
    contact:Number,
    about:String
});

const Customer = mongoose.model("Customers", customrSchema);

module.exports = Customer;