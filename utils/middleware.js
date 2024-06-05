// THIS FILE HANDLES ERROR HANDLING MIDDLEWARE

// Define the errorHandler function that takes in the error, response, and next parameters
const errorHandler = (error, response, next) => {
    console.log(error.message)
    if (error.name === 'CastError') {
        return response.status(400).send({ error: error.message })
    }
    else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    next(error)
}

// Export the errorHandler function
module.exports = errorHandler