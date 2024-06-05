// THIS FILE HANDLES GET REQUESTS TO GET MOVIES FROM THE DATABASE

// Importing the necessary modules
const getLogs = require('express').Router()
const Movie = require('../models/movie')

// Get request to get the number of movies in the database
getLogs.get('/info', async (req, res) => {
    const date = new Date()
    const movies = await Movie.find({})
    res.json(`<p> This list has information for ${movies.length} people </p><p> ${date} </p>`)
})

// Get request to get all the movies from the database
getLogs.get('/api/movies', async (req, res) => {
    const movies = await Movie.find({})
    res.json(movies)
})

// Get request to get a specific movie from the database
getLogs.get('/api/movies/:id', async (req, res) => {
    const id = (req.params.id)
    const movie = await Movie.findById(id)
    if (movie) {
        res.json(movie)
    } else {
        res.status(404).end()
    }
})

// Exporting the module
module.exports = getLogs