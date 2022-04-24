const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const notes = require('../Develop/db/db.json');

// Get all notes
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

module.exports = router;