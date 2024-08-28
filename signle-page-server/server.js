const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const alumniRoutes = require('./routes/alumniRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/alumni', alumniRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});