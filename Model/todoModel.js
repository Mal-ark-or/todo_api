const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true, 
    },

    details : {
        type: String,
    }, 

    time : {
        type: Date,
        default: Date.now
    },

    completed : {
        type: Boolean,
        default: false
    }
}, { timestamps : true }); 

// Fixed: separated the string 'Todo' from the variable todoSchema
const TodoModel = mongoose.model('Todo', todoSchema); 

// Fixed: changed 'export' to 'exports'
module.exports = TodoModel;