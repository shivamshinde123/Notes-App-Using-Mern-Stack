import Note from '../model/Note.js'

const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({createdAt: -1}) // -1 will sort in desc order (newest first)
        res.status(200).json(notes)
    }

    catch (error) {
        res.status(500).json({ message: "Internal server error" })
        console.error("Error in getAllNotes controller", error)
    }
}

const getNote = async (req, res) => {
    try {
        const id = req.params.id
        const note = await Note.findById(id)
        if (!note) {
            return res.status(404).json({ message: "Note not found" })
        }

        res.status(200).json(note)
    }

    catch (error){
        res.status(500).json({message: "Internal server error"})
        console.error("Error in getNote controller", error)
    }
}

const createNote = async (req, res) => {
    try {
        const { title, content } = req.body // we can fetch this because of middleware -> app.use(express.json())
        const newNote = new Note({ title: title, content: content })
        const savedNote = await newNote.save()
        res.status(201).json(savedNote)

    }

    catch (error) {
        console.log("Error in createNote controller", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const updateNote = async (req, res) => {

    try {
        const { title, content } = req.body
        const id = req.params.id

        const updatedNote = await Note.findByIdAndUpdate(id, { title: title, content: content }, { new: true })

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found!" })
        }

        res.status(200).json(updatedNote)

    }

    catch (error) {
        console.log("Error in updateNote controller", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const deleteNote = async (req, res) => {

    try {
        const id = req.params.id

        const deletedNote = await Note.findByIdAndDelete(id)

        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" })
        }

        res.status(200).json(deletedNote)
    }

    catch (error) {
        console.log("Error in deleteNote controller", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export { getAllNotes, createNote, updateNote, deleteNote, getNote }