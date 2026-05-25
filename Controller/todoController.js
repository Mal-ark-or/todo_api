const TodoModel = require('../model/todoModel.js');

const getAllTodo = async (req, res) => { // Changed to singular to match your router import
    try {
        const todo = await TodoModel.find();
        return res.status(200).json({ // Fixed: changed comma to a dot
            message: "All Todo",
            data: todo
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const getOneTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await TodoModel.findById(id); // Fixed: capitalized the 'B' in findById
        return res.status(200).json({
            message: "Todo found",
            data: todo
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const createTodo = async (req, res) => {
    try {
        const { title, details } = req.body;
        const todo = await TodoModel.create({ title, details });
        return res.status(201).json({
            message: "Todo created",
            data: todo 
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        
        const todo = await TodoModel.findByIdAndUpdate(
            id,
            req.body, 
            { new: true, runValidators: true } 
        );

        return res.status(200).json({
            message: "Todo updated successfully",
            data: todo
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};


const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await TodoModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Todo deleted",
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = { 
    getAllTodo, 
    getOneTodo,
    createTodo,
    updateTodo,
    deleteTodo
}