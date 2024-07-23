const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log('Database not connected:', err));

// Middleware setup
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };
  
  app.use(cors({ origin: '*' }));

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies

// Routes
app.use('/api/auth', require('./routes/auth')); // Ensure this path is correct

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT || 8000; // Use environment variable or default to 8000
app.listen(port, () => console.log(`Server is running on port ${port}`));
