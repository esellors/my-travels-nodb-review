import React from 'react';
import './App.css';
import Header from './Components/Header';
import AddLocation from './Components/AddLocation';
import Locations from './Components/Locations';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AddLocation />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
