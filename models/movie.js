// THIS FILE HANDLES THE SCHEMA FOR THE MOVIE DATABASE

// Importing the necessary modules
const mongoose = require('mongoose')
require('dotenv').config()

// Connecting to the MongoDB database
const url = process.env.MONGODB_URL
mongoose.set('strictQuery', false)
mongoose.connect(url).then(() => {
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})

// Defining the urlValidator function
const urlValidator = (value) => {
    const urlRegex = /^https:\/\/bit\.ly\/\S*$/;
    return urlRegex.test(value);
};

// Defining the movieSchema
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
    },
    img: {
        type: String,
        required: true,
        validate: {
            validator: urlValidator,
            message: props => `${props.value} is not a valid URL!`
        }
    },
    summary: {
        type: String,
        required: true,
        minlength: 10
    }
})

// Setting the toJSON property of the movieSchema
movieSchema.set('toJSON', {
    transform: (returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// Exporting the module
module.exports = mongoose.model('Movie', movieSchema)