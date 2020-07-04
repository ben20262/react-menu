import React from 'react';
import './App.css';
import AppetizersContainer from './containers/AppetizersContainer'
import DessertsContainer from './containers/DessertsContainer'
import DrinksContainer from './containers/DrinksContainer'
import MealsContainer from './containers/MealsContainer'

function App() {
  return (
    <div className="App">
        <AppetizersContainer />
        <MealsContainer />
        <DrinksContainer />
        <DessertsContainer />
    </div>
  );
}

export default App;
