
import express from 'express'
import {getAllNotes, createNote, updateNote, deleteNote} from '../controllers/notesControllers.js'

const router = express.Router()

// Get all notes
router.get('/', getAllNotes)

// Create new note
router.post('/', createNote)

// Update the existing note
router.put('/:id', updateNote)

router.delete('/:id', deleteNote)

export default router