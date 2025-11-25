

const getAllNotes = (req, res) => {
    res.status(200).send("You just fetched the notes!")
}

const createNote = (req, res) => {
    // get the notes from server
    res.status(201).json({ message: "Note created successfully!" })
}

const updateNote = (req, res) => {
    // get the notes from server
    res.status(200).json({ message: "Note updated successfully!" })
}

const deleteNote = (req, res) => {
    // get the notes from server
    res.status(200).json({ message: "Note deleted successfully!" })
}

export {getAllNotes, createNote, updateNote, deleteNote}