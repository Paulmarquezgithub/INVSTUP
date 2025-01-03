const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Configure CORS options with improved security
const corsOptions = {
    origin: 'http://127.0.0.1:5500', // Adjust this to your client's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization', // Consider adding 'Accept' for broader compatibility
    exposedHeaders: ['Content-Type', 'Authorization'], // Explicitly expose headers for CORS
    credentials: true, // Enable credentials for authenticated requests
    optionsSuccessStatus: 200 // Changed from 204 to 200 for better compatibility
};

// Middleware to enable CORS with options
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to handle URL-encoded requests (e.g., for form submissions)
app.use(express.urlencoded({ extended: true }));

// Test endpoint for server setup
app.get('/', (req, res) => {
    res.send('Server is running! Use the /register endpoint for user registration.');
});

// Import and use the routes for registration
const registerRoutes = require('./routes/register');
app.use('/register', registerRoutes);

// Handle OPTIONS requests (already covered by app.use(cors(corsOptions)))
// The following line is redundant and can be removed
// app.options('*', cors(corsOptions));

// Error Handling Middleware (added for better error handling)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});