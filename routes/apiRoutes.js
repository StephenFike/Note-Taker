const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const notes = require('../Develop/db/db.json');
const { updateNote, findNote } = require('../lib/notes')

// Get all notes
router.get('/notes', (req, res) => {
    res.json(notes);
})

// update note
router.put('/notes/:id', (req,res) => {
    findNote(req.params.id, req.params.body)
})

module.exports = router;