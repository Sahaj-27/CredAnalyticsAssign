// THIS IS THE MAIN FILE THAT RUNS THE SERVER

// Import the app module
const app = require('./app')
require('dotenv').config()

// Run the server on port 5002
app.listen(process.env.PORT || 5002, () => {
    console.log(`Server running on port ${process.env.PORT || 5001}`)
})