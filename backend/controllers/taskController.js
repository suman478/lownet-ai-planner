const db = require('../../database/localDB');

// Get all tasks
exports.getAllTasks = (req, res) => {
    try {
        const tasks = db.getTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new task
exports.createTask = (req, res) => {
    try {
        const { text, priority } = req.body;
        const task = db.createTask(text, priority);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a task
exports.updateTask = (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const task = db.updateTask(id, updates);
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a task
exports.deleteTask = (req, res) => {
    try {
        const { id } = req.params;
        db.deleteTask(id);
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
