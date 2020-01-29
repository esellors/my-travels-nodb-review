import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import AddLocation from './Components/AddLocation';
import Locations from './Components/Locations';
import Footer from './Components/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: []
    }
    this.retrieveLocations = this.retrieveLocations.bind(this);
  }
  componentDidMount() {
    axios
        .get('/api/locations')
        .then(res => this.setState({ locations: res.data }))
        .catch(err => console.log(err));
  }
  retrieveLocations(locationsRes) {
    this.setState({ locations: locationsRes })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <AddLocation retrieveLocations={this.retrieveLocations}/>
        <Locations locations={this.state.locations} />
        <Footer />
      </div>
    );
  }
}

export default App;
