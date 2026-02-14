// Simple in-memory database
let tasks = [];
let taskId = 1;

const db = {
    getTasks: () => tasks,
    
    createTask: (text, priority = 'medium') => {
        const task = {
            id: taskId++,
            text,
            priority,
            completed: false,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        tasks.push(task);
        return task;
    },
    
    updateTask: (id, updates) => {
        const task = tasks.find(t => t.id === parseInt(id));
        if (!task) throw new Error('Task not found');
        
        Object.assign(task, updates, { updatedAt: new Date() });
        return task;
    },
    
    deleteTask: (id) => {
        const index = tasks.findIndex(t => t.id === parseInt(id));
        if (index === -1) throw new Error('Task not found');
        
        tasks.splice(index, 1);
    },
    
    clearAll: () => {
        tasks = [];
        taskId = 1;
    }
};

module.exports = db;
