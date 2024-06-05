// THIS FILE HANDLES PATCH REQUESTS TO UPDATE MOVIES IN THE DATABASE

// Importing the necessary modules
const patchLogs = require('express').Router()
const Movie = require('../models/movie')

// Patch request to update the summary of a movie in the database
patchLogs.put('/api/moviesSum/:id/', async (req, res) => {
    const { id } = req.params
    const body = req.body;
    const movie = await Movie.findById(id)
    if (!movie) {
        return response.status(404).json({ error: 'Movie not found' })
    }
    const updatedMovie = await Movie.findByIdAndUpdate(id, { summary: body.summary });
    res.json(updatedMovie);
});

// Patch request to update the image of a movie in the database
patchLogs.put('/api/moviesImg/:id/', async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const movie = await Movie.findById(id);
    if (!movie) {
        return response.status(404).json({ error: 'Movie not found' });
    }
    const updatedMovie = await Movie.findByIdAndUpdate(id, { img: body.img });
    res.json(updatedMovie);
});

// Exporting the module
module.exports = patchLogs