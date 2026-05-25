const express = require('express');
const router = express.Router();

const {
    getAllTodo, // Keeping your singular import name
    getOneTodo,
    createTodo,
    updateTodo,
    deleteTodo,
} = require("../Controller/todoController");

router.get("/get-todos", getAllTodo); 
router.get("/:id", getOneTodo);
router.post("/create-todos", createTodo);
router.patch("/update-todos/:id", updateTodo);
router.delete("/delete-todos/:id", deleteTodo);

module.exports = router;
