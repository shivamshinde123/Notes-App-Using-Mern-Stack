
import express from 'express'
import {getAllNotes, createNote, updateNote, deleteNote, getNote} from '../controllers/notesControllers.js'

const router = express.Router()

// Get all notes
router.get('/', getAllNotes)

// Get specific note
router.get("/:id", getNote)

// Create new note
router.post('/', createNote)

// Update the existing note
router.put('/:id', updateNote)

router.delete('/:id', deleteNote)

export default router