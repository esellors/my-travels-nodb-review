const express = require('express');
const app = express();
const LC = require('./controllers/locationsController');

// location routes
app.get('/api/locations', LC.getLocations);
app.post('/api/locations', LC.addLocation);

const PORT = 5050;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));