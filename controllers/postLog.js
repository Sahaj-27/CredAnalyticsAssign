// THIS FILE HANDLES POST REQUESTS TO ADD MOVIES TO THE DATABASE

// Importing the necessary modules
const postLogs = require('express').Router()
const Movie = require('../models/movie')

// Post request to add a movie to the database
postLogs.post('/api/movies', async (req, res) => {
    const body = req.body
    const movie = {
        name: body.name,
        img: body.img,
        summary: body.summary
    }
    const newMovie = new Movie(movie)
    const result = await newMovie.save()
    res.status(201).json(result)
})

// Exporting the module
module.exports = postLogs