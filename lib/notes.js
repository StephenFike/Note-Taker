const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const notes = require('../Develop/db/db.json')

function findNote(id, body) {
    notes.forEach(note => {
        if (id == note.id){
            updateNote(note, body)
        }
    });
}

function updateNote(note, body){

    note.title = body.title
    note.text = body.text

    fs.writeFile(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify(notes, null, 4), (err) => {
        if(err) {
            console.error(err)
        }
    })
}

module.exports = {
    updateNote,
    findNote
}