// THIS FILE HANDLES DELETE REQUESTS TO DELETE MOVIES FROM THE DATABASE

// Importing the necessary modules
const deleteLogs = require('express').Router()
const Movie = require('../models/movie')

// Delete request to delete a movie from the database
deleteLogs.delete('/api/movies/:id', async (req, res) => {
    const id = req.params.id
    const movie = await Movie.findById(id)
    if (!movie) {
        res.status(404).json({ error: 'Movie not found' })
    } 
    await Movie.findByIdAndDelete(id)
    res.status(204).end()
})

// Exporting the module
module.exports = deleteLogs