let id = 2;

const myLocations = [
    { 
        id: 0, 
        country: 'USA', 
        city: 'Dallas', 
        imgURL: 'https://media.gettyimages.com/photos/dallas-city-skyline-texas-picture-id157509037?s=612x612', 
        favorite: false 
    },
    { 
        id: 1, 
        country: 'France', 
        city: 'Paris', 
        imgURL: 'https://image.shutterstock.com/image-photo/paris-eiffel-tower-river-seine-260nw-710380270.jpg',
        favorite: false 
    }
];

module.exports = {
    getLocations: (req, res) => {
        res.status(200).json(myLocations);
    },
    addLocation: (req, res) => {
        const newLocation = {
            id,
            ...req.body
        }

        myLocations.push(newLocation);

        id++;

        res.status(200).json(myLocations)
    }
}