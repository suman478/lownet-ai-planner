const express = require('express');
const router = express.Router();

// Scheduler routes
router.get('/schedule', (req, res) => {
    res.json({ message: 'Get schedule' });
});

router.post('/schedule', (req, res) => {
    res.json({ message: 'Create schedule' });
});

module.exports = router;
