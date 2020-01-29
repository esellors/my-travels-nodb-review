const express = require('express');
const app = express();
const LC = require('./controllers/locationsController');

app.use(express.json());

// location routes
app.get('/api/locations', LC.getLocations);
app.post('/api/locations', LC.addLocation);
app.delete('/api/locations/:id', LC.deleteLocation);

const PORT = 5050;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));