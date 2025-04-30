const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Placeholder for future API endpoints
// Example: Fetch Mapillary data
app.post('/get-images', (req, res) => {
    const { imageIds } = req.body;
    if (!imageIds) return res.status(400).json({ error: 'No image IDs provided' });
    // Fetch image data logic can be added here
    res.json({ message: 'Images fetched successfully', imageIds });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));