const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const notes = require('../Develop/db/db.json');
const uuid = require('uuid');

// Get all notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// post note
router.post('/notes', (req,res) => {

    const newNote = req.body;
    newNote.id = uuid.v4();

    notes.push(newNote);

    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(notes), function(err) {
        if(err) {
            return console.log(err)
        }
    })
    res.json(notes);
});

// delete a note
router.delete('/notes/:id', (req, res) => {
    
    const deletedNote = notes.filter(delNote => delNote.id !== req.params.id)

    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(deletedNote), function(err) {
        if(err) {
            return console.log(err)
        }
    })

    res.json(notes);
});

module.exports = router;